'use strict';
console.log("HOLA MUNDO");
const electron = require('electron');
const { app, BrowserWindow } = electron;
const basepath = app.getAppPath();
console.log(basepath);
const tools = require('./src/services/devtools');
//
// Imprimiendo un mensaje antes de se cierre la ventana
if (process.env.NODE_ENV === "development") {
    tools.devTools()
}
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        //icon: `file://${__dirname}/dist/assets/logo.png`
    })

    console.log(`file://${basepath}/dist/index.html`);
    win.loadURL(`file://${basepath}/dist/index.html`)

    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function() {
        win = null
    })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})