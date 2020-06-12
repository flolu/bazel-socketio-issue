// Inspiration:  https://github.com/angular/angular/blob/master/tools/postinstall-patches.js

try {
  require.resolve('shelljs');
} catch (e) {
  // We are in an bazel managed external node_modules repository
  // and the resolve has failed because node did not preserve the symlink
  // when loading the script.
  // This can be fixed using the --preserve-symlinks-main flag which
  // is introduced in node 10.2.0
  console.warn(
      `Running postinstall-patches.js script in an external repository requires --preserve-symlinks-main node flag introduced in node 10.2.0. ` +
      `Current node version is ${process.version}. Node called with '${process.argv.join(' ')}'.`);
  process.exit(0);
}

const {set, cd, sed, ls} = require('shelljs');
const path = require('path');
const log = console.info;

log('===== about to run the postinstall-patches.js script     =====');
// fail on first error
set('-e');
// print commands as being executed
set('-v');

cd(__dirname);

log('\n# patch engine.io-client: rewriting \'xmlhttprequest-ssl\' to browser shim');
ls('node_modules/engine.io-client/lib/transports/*.js').forEach(function (file) {
  sed('-i', '\'xmlhttprequest-ssl\'', '\'../xmlhttprequest\'', file);
});

log('===== finished running the postinstall-patches.js script =====');
