const { app, BrowserWindow } = require('electron');
function createwindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })
window.loadFile('src/pages/cadastro.html');
}
app.whenReady().then( () => {
    createwindow();
} )