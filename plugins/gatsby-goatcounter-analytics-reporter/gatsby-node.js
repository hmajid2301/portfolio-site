var fs = require('fs');
var zlib = require('zlib');
var axios = require('axios');
var parse = require('csv-parse');

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions;

  url = `https://${configOptions.code}.goatcounter.com/api/v0/export`;
  const options = {
    headers: {
      Authorization: `Bearer ${configOptions.personalToken}`,
      'content-type': 'application/json',
    },
  };

  let res = await axios.post(url, {}, options);
  const id = res.data.id;
  res = await axios.get(`${url}/${id}/download`, {
    responseType: 'arraybuffer',
    options,
  });
  const outputFilename = 'plugins/gatsby-goatcounter-analytics-reporter/b.csv';
  fs.writeFileSync(outputFilename, res.data);

  zlib.createUnzip(),
    (input = fs.createReadStream(
      'plugins/gatsby-goatcounter-analytics-reporter/b.csv'
    ));
  var data = [];
  const analyticsData = {};
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
            if (analyticsData[pageName] !== undefined) {
              analyticsData[pageName] += 1;
            } else {
              analyticsData[pageName] = 1;
            }
          }
          console.log(analyticsData);
        });
      });
    });
};
