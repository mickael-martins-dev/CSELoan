import { fusebox } from 'fuse-box';
const fuse = fusebox({
  dependencies: { serverIgnoreExternals: false }, // TODO : Read documentation for this option
  entry: 'src/server.ts',
  logging: { level: 'succinct' },
  modules: ['node_modules'],
  target: 'server',
});

fuse.runProd({ bundles: { distRoot: 'dist', app: 'server.js' } });

//
// Command 
// export PATH=/home/pi/dev/node-v14.15.4-linux-armv7l/bin:$PATH
// pi@raspberrypi:~/dev/loanApp/server $ ./node_modules/.bin/ts-node fuseServer.ts 
//

