#!/bin/bash

echo "Babelifying..."
npx babel ./isEq.js --presets=env -o ./umd/isEq2.js
echo "Browserifying..."
npx browserify ./umd/isEq2.js -s isEq > ./umd/isEq.js
echo "Minifying output..."
npx uglifyjs ./umd/isEq.js > ./umd/isEq.min.js
echo "Cleaning up..."
rm ./umd/isEq2.js
echo "Done!"