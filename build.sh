#!/bin/bash

echo "Babelifying..."
npx babel ./isEq.js --presets=env -o ./umd/isEq.temp.js
echo "Browserifying..."
npx browserify ./umd/isEq.temp.js -s isEq > ./umd/isEq.js
echo "Minifying output..."
npx uglifyjs ./umd/isEq.js > ./umd/isEq.min.js
echo "Cleaning up..."
rm ./umd/isEq.temp.js
echo "Done!"
