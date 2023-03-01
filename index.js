const { app, BrowserWindow } = require("electron");
const path = require("path");

const scale = 1;

function createWindow() {
    const win = new BrowserWindow({
        width: 232 * scale,
        height: 322 * scale,
        titleBarStyle: "hidden",
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
        resizable: false,
    });
    win.setVibrancy(win, {
        theme: "light",
        effect: "acrylic",
        disableOnBlur: true,
    });
    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
