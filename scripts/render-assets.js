const upath = require('upath');
const sh = require('shelljs');
const dist = '../docs/.';

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), dist);

    sh.cp('-R', sourcePath, destPath)
};
