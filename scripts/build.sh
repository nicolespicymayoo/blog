#!/bin/bash
ROOT_FOLDER=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/..

cd $ROOT_FOLDER
npm install
rm -Rf meteor/react-build-generated
./node_modules/.bin/webpack --config webpack/production.config.js

cd meteor
meteor build ..
