import * as vite from 'vite';

const server = await vite.createServer();
await server.ssrLoadModule('/src/app.js');
await server.close();
