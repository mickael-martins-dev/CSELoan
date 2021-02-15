import { fusebox } from 'fuse-box';
const fuse = fusebox({
  entry: 'src/index.tsx',
  target: 'browser',
  devServer: {
    httpServer: { port: 3000 },
    hmrServer: { port: 3001 },
  },
  webIndex: {
    template: 'src/index.html', 
  },
});

fuse.runDev();