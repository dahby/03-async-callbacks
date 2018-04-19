'use strict';

const fs = require('fs');
const logger = require('./logger');

const fileReader = module.exports = {};

fileReader.readFirst = (paths, callback) => {
  logger.log(logger.VERBOSE, `Reading ${paths}`);
  return fs.readFile(paths, (error, fileBuffer) => {
    if (error) {
      callback(error);
    }
    return callback(fileBuffer.toString('utf8', 0));
  });
};
