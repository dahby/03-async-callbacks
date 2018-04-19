# 03: Async Callbacks
**Author**: David Stoll
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)
## Overview
This lab is to demonstrate how to map over an array of text files into a new array so that the strings of text are in the same array position as the original elements.
## Documentation
fileReader.readFirst() - Has an arity of two which takes in the file path that we will read as well as a callback function. This will utilize the fs to read the contents of the text files located in my data folder. 
readFileArray() - This will take in each index of our original array of text files and iterate them through our fileReader.readFirst() function to show the text content in a new array, resolvedFiles.
## Architecture
Built in VSCode with JavaScript, node.js, eslinter, & winston.
