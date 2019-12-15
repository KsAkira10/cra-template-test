'use strict';
const fs = require('fs');

const tpl = fs.readFileSync('package.json');
const devTpl = fs.readFileSync('template.json');
const parsePackage = JSON.parse(tpl);
const parseTemplate = JSON.parse(devTpl);
const data = {
  ...parsePackage,
  ...parseTemplate,
};
delete data.scripts.preinstall;
delete data.eslintConfig;

fs.writeFileSync('./package.json', JSON.stringify(data));
