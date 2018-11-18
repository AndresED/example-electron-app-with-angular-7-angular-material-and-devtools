'use strict'
// Instanciando objetos app y BroserWindows
//import { app, BrowserWindow, electron } from 'electron';
const electron = require('electron');
const { app, BrowserWindow } = electron;
const tools = require('./src/services/devtools');
//console.dir(app);
// Imprimiendo un mensaje antes de se cierre la ventana
if (process.env.NODE_ENV === "development") {
    devtools.reload()
}
app.on('before-quit', () => {
        console.log("saliendo");
    })
    // Cuando este listo la aplicacion se ejecuta 
app.on('ready', () => {
    // creando la ventana
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    console.log(width, height);
    let win = new BrowserWindow({
        width: width,
        height: height,
        fullscreen: false,
        title: "Hola mundo",
        center: true,
        maximizable: true,
        show: false,
        backgroundColor: '#2e2c29'
    });
    win.once('ready-to-show', () => {
            win.show();
        })
        //detectando cuando se cierre la ventana
    win.on('close', () => {
        win = null; // limpiando memoria
        console.log("Se esta cerrando la ventana");
        //cerrando la aplicacion
        app.quit();
    })
    win.on('move', () => {
        const position = win.getPosition();
        //console.log(position);

    })

    //win.loadURL("https://devdocs.io/");
    win.loadURL(`file://${__dirname}/dist/index.html`);
    win.toggleDevTools();

})