const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');
const { list, detail } = require('./../lib/index.js');
function getJsonFile (filePath) {
  var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
  return JSON5.parse(json);
}
