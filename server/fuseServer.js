"use strict";
exports.__esModule = true;
var fuse_box_1 = require("fuse-box");
var fuse = (0, fuse_box_1.fusebox)({
    dependencies: { serverIgnoreExternals: false },
    entry: 'src/server.ts',
    logging: { level: 'succinct' },
    modules: ['node_modules'],
    target: 'server'
});
fuse.runProd({ bundles: { distRoot: 'dist', app: 'server.js' } });
//
// Command 
// export PATH=/home/pi/dev/node-v14.15.4-linux-armv7l/bin:$PATH
// pi@raspberrypi:~/dev/loanApp/server $ ./node_modules/.bin/ts-node fuseServer.ts 
//
