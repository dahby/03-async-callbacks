'use strict';

const logger = require('./lib/logger');
const fileReader = require('./lib/reader');

const onePath = `${__dirname}/data/one.txt`;
const twoPath = `${__dirname}/data/two.txt`;
const threePath = `${__dirname}/data/three.txt`;

const files = [onePath, twoPath, threePath];
const resolvedFiles = [];


const readFileArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return fileReader.readFirst(currentFilePath, (file) => {
      resolvedFiles.push(file);
      readFileArray(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

readFileArray(files, 0, () => logger.log(logger.INFO, resolvedFiles));
