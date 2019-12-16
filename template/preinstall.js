(() => {
  'use strict';
  const fs = require('fs');

  const rename = ({ name }) => ({ name: `omni.front.react.${name}` });

  try {
    const parsePackage = JSON.parse(fs.readFileSync('./package.json'));
    const parseTemplate = JSON.parse(fs.readFileSync('./template.json'));

    const data = {
      ...parsePackage,
      ...parseTemplate,
      ...rename({ ...parsePackage }),
    };

    delete data.scripts.preinstall;
    delete data.eslintConfig;

    fs.writeFileSync('./package.json', JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
})();
