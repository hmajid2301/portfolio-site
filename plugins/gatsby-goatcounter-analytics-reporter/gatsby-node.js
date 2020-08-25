const crypto = require('crypto');
const fs = require('fs');

const zlib = require('zlib');

const axios = require('axios');
const parse = require('csv-parse');
const moment = require('moment');

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions;

  const analyticsFileName = '/tmp/data.csv';
  await saveCSVData(
    configOptions.code,
    configOptions.personalToken,
    analyticsFileName
  );
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
          const analyticsData = updateAnalyticsDataFromCSV(
            configOptions.daysAgo,
            rows
          );
          createNodes(analyticsData, createNode);
        });
      });
    });
};

async function saveCSVData(code, token, csvFile) {
  url = `https://${code}.goatcounter.com/api/v0/export`;
  const headers = {
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  };

  let id = 0;
  try {
    const res = await axios.post(url, {}, { headers });
    id = res.data.id;
  } catch (err) {
    console.log('GoatCounter API threw an error', err.status, err.data);
    throw new Error(err);
  }

  try {
    res = await axios.get(`${url}/${id}/download`, {
      responseType: 'arraybuffer',
      headers,
    });
    fs.writeFileSync(csvFile, res.data);
  } catch (err) {
    console.log('GoatCounter API threw an error', err.status, err.data);
    throw new Error(err);
  }
}

function updateAnalyticsDataFromCSV(daysAgo, rows) {
  const analyticsData = {};
  const startDate = daysAgo
    ? moment().subtract(daysAgo, 'days')
    : moment('2020-01-01T00:00:00');
  const endDate = moment();

  for (const row of rows.slice(1)) {
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
  for (const [path, totalCount] of Object.entries(analyticsData)) {
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
