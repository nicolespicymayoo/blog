cd %~dp0\..
npm install
rd /s /q meteor\react-build-generated

cd meteor
set WEBPACK_CONFIG=%~dp0\..\webpack\development.config.js
meteor --settings ../settings/development.json
