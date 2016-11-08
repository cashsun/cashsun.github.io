const express = require('express');
const path = require('path');
const browserSync = require('browser-sync').create();
const app = express();

app.use(express.static(path.join(__dirname, '..')));

const port = 3001;
const server = app.listen(port);
browserSync.init({
    proxy: `localhost:${port}`
});

browserSync.watch(path.join(__dirname, '../js/*.build.js'), browserSync.reload);

function handleError() {
    server.close();
}

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
    handleError();
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
    process.exit();
});

process.on('SIGINT', () => {
    console.error(`manual termination`);
    process.exit();
});