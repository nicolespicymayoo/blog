#!/bin/bash
ROOT_FOLDER=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/..
cd $ROOT_FOLDER
dir=$1
mkdir react/views/$dir
cd react/views/$dir
touch index.js index.css
cd  $ROOT_FOLDER
