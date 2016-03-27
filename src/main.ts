/// <reference path="../typings/main.d.ts" />

import * as electron from 'electron';
import {app, BrowserWindow} from 'electron';
electron.crashReporter.start();

var mainWindow: GitHubElectron.BrowserWindow = null;


app.on('window-all-closed', function() {

  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  console.log("Base dir: " + __dirname);
  
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});