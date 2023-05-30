const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    // On MacOS, create a window whenever the app is active
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// On Windows and Linux, close app when window is closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})