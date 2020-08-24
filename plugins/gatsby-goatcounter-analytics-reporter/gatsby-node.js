var fs = require('fs');
var parse = require('csv-parse');

// exports.sourceNodes = async ({ actions }, configOptions) => {
//   const { createNode } = actions;
//   console.log('HELLO');
//   var csvData = [];
//   fs.createReadStream('plugins/gatsby-goatcounter-analytics-reporter/a.csv')
//     .pipe(parse({ delimiter: ',' }))
//     .on('data', function(csvrow) {
//       console.log(csvrow);
//       //do something with csvrow
//       csvData.push(csvrow);
//     })
//     .on('end', function() {
//       //do something with csvData
//       console.log(csvData);
//     });
// };
