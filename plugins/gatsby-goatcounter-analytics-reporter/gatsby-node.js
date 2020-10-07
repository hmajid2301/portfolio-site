const crypto = require('crypto');
const fs = require('fs');
var request = require('request');
const zlib = require('zlib');

const axios = require('axios');
const neatCsv = require('neat-csv');
const moment = require('moment');

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions;

  const analyticsFileName = '/tmp/data.csv';
  await saveCSVData(
    configOptions.code,
    configOptions.personalToken,
    analyticsFileName
  );

  fs.readFile(analyticsFileName, async (err, data) => {
    if (err) {
      throw err;
    }
    const d = await neatCsv(data);
    const analyticsData = updateAnalyticsDataFromCSV(configOptions.daysAgo, d);
    createNodes(analyticsData, createNode);
  });
};

async function saveCSVData(code, token, csvFile) {
  url = `https://${code}.goatcounter.com/api/v0/export`;
  let headers = {
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  };

  let id = 0;
  try {
    const res = await axios.post(url, {}, { headers });
    await new Promise(resolve => setTimeout(resolve, 500));
    id = res.data.id;
  } catch (err) {
    console.log('GoatCounter API threw an error', err.status, err.data);
    throw new Error(err);
  }

  const response = request({
    url: `${url}/${id}/download`,
    headers,
  });
  response.on('response', function(response) {
    response = response.pipe(zlib.createGunzip());
    const uncompressed = fs.createWriteStream(csvFile);
    response.pipe(uncompressed);

    fs.readFile(csvFile, async (err, data) => {
      if (err) {
        throw err;
      }
      return data;
    });
  });
}

function updateAnalyticsDataFromCSV(daysAgo, rows) {
  const analyticsData = {};
  const startDate = daysAgo
    ? moment().subtract(daysAgo, 'days')
    : moment('2020-01-01T00:00:00');
  const endDate = moment();

  for (const row of rows) {
    const pageName = row['1Path'];
    const viewDateTime = moment(row['Date']);
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
