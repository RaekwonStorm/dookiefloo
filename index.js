'use strict';
const electron = require('electron');
const app = electron.app;
var indexFile = `${__dirname}/index.html`;
let window;
var idleTime=0;

app.on('ready', () => {
  window = new electron.BrowserWindow({
      width: 1000,
      height: 650,
      titleBarStyle: 'hidden',
      minWidth: 850,
      minHeight: 450
    })

  window.on('close', (e) => {
    window = null
  });

  window.loadURL(`file:${indexFile}`); /* load your page */

});

/* 'activate' is emitted when the user clicks the Dock icon (OS X) */
app.on('activate', () => window.show());

/* 'before-quit' is emitted when Electron receives
 * the signal to exit and wants to start closing windows */
app.on('before-quit', () => {
  console.log('closing');
});
