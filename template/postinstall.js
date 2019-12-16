(() => {
  'use strict';
  const fs = require('fs');

  try {
    fs.unlinkSync('./template.json');
    fs.unlinkSync('./preinstall.js');

    const pkg = fs.readFileSync('package.json');
    const parsePackage = JSON.parse(pkg);
    const data = {
      ...parsePackage,
    };
    delete data.scripts.postinstall;

    fs.writeFileSync('./package.json', JSON.stringify(data));
    fs.unlinkSync('./postinstall.js');
  } catch (err) {
    console.error(err);
  }
})();
