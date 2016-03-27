/// <reference path="../typings/main.d.ts" />

import * as electron from 'electron'; 
import {remote} from 'electron'; 
const app = remote.app;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

function hello(){
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
