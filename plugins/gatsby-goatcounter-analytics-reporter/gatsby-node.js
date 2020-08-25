var fs = require('fs');
var zlib = require('zlib');
var axios = require('axios');
var parse = require('csv-parse');
var crypto = require('crypto');
var moment = require('moment');

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions;

  const analyticsFileName = '/tmp/data.csv';
  await saveCSVData(analyticsFileName);
  zlib.createUnzip(), (input = fs.createReadStream(analyticsFileName));
  const data = [];

  input
    .on('data', function(chunk) {
      data.push(chunk);
    })
    .on('end', function() {
      const buf = Buffer.concat(data);
      zlib.gunzip(buf, function(err, buffer) {
        parse(buffer.toString(), { columns: false, trim: true }, function(
          err,
          rows
        ) {
          const analyticsData = updateAnalyticsDataFromCSV(configOptions, rows);
          createNodes(analyticsData, createNode);
        });
      });
    });
};

async function saveCSVData(csvFile) {
  url = `https://${configOptions.code}.goatcounter.com/api/v0/export`;
  const headers = {
    Authorization: `Bearer ${configOptions.personalToken}`,
    'content-type': 'application/json',
  };

  let id = 0;

  try {
    let res = await axios.post(url, {}, { headers: headers });
    id = res.data.id;
  } catch (err) {
    console.log('GoatCounter API threw an error', err.status, err.data);
    throw new Error(err);
  }

  res = await axios.get(`${url}/${id}/download`, {
    responseType: 'arraybuffer',
    headers: headers,
  });

  fs.writeFileSync(csvFile, res.data);
}

function updateAnalyticsDataFromCSV(configOptions, rows) {
  const analyticsData = {};
  const startDate = configOptions.startDate
    ? moment().subtract(30, 'days')
    : moment('2020-01-01T00:00:00');
  const endDate = moment();

  for (let row of rows) {
    const pageName = row[0];
    const viewDateTime = moment(row[11]);
    if (viewDateTime.isBetween(startDate, endDate)) {
      if (analyticsData[pageName] !== undefined) {
        analyticsData[pageName] += 1;
      } else {
        analyticsData[pageName] = 1;
      }
    }
  }
  return analyticsData;
}

function createNodes(analyticsData, createNode) {
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
}
