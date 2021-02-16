const sh = require('shelljs');
const upath = require('upath');
const dist = '../docs'

const destPath = upath.resolve(upath.dirname(__filename), dist);

sh.rm('-rf', `${destPath}/*`)
