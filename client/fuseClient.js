"use strict";
exports.__esModule = true;
var fuse_box_1 = require("fuse-box");
var fuse = (0, fuse_box_1.fusebox)({
    entry: 'src/main.tsx',
    target: 'browser',
    devServer: {
        httpServer: { port: 3000 },
        hmrServer: { port: 3001 }
    },
    webIndex: {
        template: 'src/index.html'
    }
});
fuse.runDev();
