/* eslint global-require: off, no-console: off */

import { app, BrowserWindow } from 'electron';

async function createWindow () {
  if (process.env.NODE_ENV === 'development') {
    //await installExtensions();
  }

  let win = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    webPreferences: { nodeIntegration: true }
  });

  win.loadURL(`file://${__dirname}/app.html`);			      
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
