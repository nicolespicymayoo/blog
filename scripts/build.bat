cd %~dp0\..
npm install
rd /s /q meteor/react-build-generated
call node_modules/.bin/webpack.cmd --config webpack/production.config.js

cd meteor
meteor build ..
