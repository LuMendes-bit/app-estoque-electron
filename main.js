const { app, BrowserWindow } = require('electron');
function createwindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })
window.loadFile('src/pages/dashboard.html');
}
app.whenReady().then( () => {
    createwindow();
} )