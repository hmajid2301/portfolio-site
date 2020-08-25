var fs = require('fs');
var zlib = require('zlib');
var axios = require('axios');
var parse = require('csv-parse');
var moment = require('moment');

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions;

  url = `https://${configOptions.code}.goatcounter.com/api/v0/export`;
  const options = {
    headers: {
      Authorization: `Bearer ${configOptions.personalToken}`,
      'content-type': 'application/json',
    },
  };

  console.log(options);
  let res = await axios.post(url, {}, options);
  const id = res.data.id;
  res = await axios.get(`${url}/${id}/download`, {
    responseType: 'arraybuffer',
    headers: {
      Authorization: `Bearer ${configOptions.personalToken}`,
      'content-type': 'application/json',
    },
  });
  const outputFilename = 'plugins/gatsby-goatcounter-analytics-reporter/b.csv';
  fs.writeFileSync(outputFilename, res.data);

  zlib.createUnzip(),
    (input = fs.createReadStream(
      'plugins/gatsby-goatcounter-analytics-reporter/b.csv'
    ));
  var data = [];
  const analyticsData = {};
  const startDate = configOptions.startDate
    ? moment().subtract(30, 'days')
    : moment('2020-01-01T00:00:00');
  const endDate = moment();

  input
    .on('data', function(chunk) {
      data.push(chunk);
    })
    .on('end', function() {
      var buf = Buffer.concat(data);
      zlib.gunzip(buf, function(err, buffer) {
        parse(buffer.toString(), { columns: false, trim: true }, function(
          err,
          rows
        ) {
          for (let i = 1; i < rows.length; i++) {
            const pageName = rows[i][0];
            const viewDateTime = moment(rows[i][11]);
            console.log(viewDateTime);
            if (viewDateTime.isBetween(startDate, endDate)) {
              if (analyticsData[pageName] !== undefined) {
                analyticsData[pageName] += 1;
              } else {
                analyticsData[pageName] = 1;
              }
            }
          }
          for (let [path, totalCount] of Object.entries(analyticsData)) {
            createNode({
              path,
              totalCount: Number(totalCount),
              id: path,
              internal: {
                type: `PageViews`,
                contentDigest: crypto
                  .createHash(`md5`)
                  .update(JSON.stringify({ path, totalCount }))
                  .digest(`hex`),
                mediaType: `text/plain`,
                description: `Page views per path`,
              },
            });
          }
          console.log(analyticsData);
        });
      });
    });
};
