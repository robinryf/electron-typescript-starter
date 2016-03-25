"use strict";
var electron_1 = require('electron');
var app = electron_1.remote.app;
var BrowserWindow = electron_1.remote.BrowserWindow;
var dialog = electron_1.remote.dialog;
function hello() {
    var options = {
        title: 'My Dialogue',
        type: 'info',
        buttons: ['OK', 'Cancel'],
        message: 'Choose wisely',
        detail: 'hello'
    };
    var win = BrowserWindow.getFocusedWindow();
    dialog.showMessageBox(win, options);
}
//# sourceMappingURL=index.js.map