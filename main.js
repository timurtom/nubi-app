const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: "NUBI Control Center",
    autoHideMenuBar: true,
    backgroundColor: '#0f0f0f',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true
    }
  });

  // Automatically handle WebHID device pairing
  win.webContents.session.on('select-hid-device', (event, details, callback) => {
    event.preventDefault();
    if (details.deviceList && details.deviceList.length > 0) {
      callback(details.deviceList[0].deviceId);
    } else {
      callback('');
    }
  });

  win.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
    if (permission === 'hid' || permission === 'usb' || permission === 'bluetooth') {
      return true;
    }
    return true;
  });

  win.webContents.session.setDevicePermissionHandler((details) => {
    if (details.deviceType === 'hid' || details.deviceType === 'usb' || details.deviceType === 'bluetooth') {
      return true;
    }
    return false;
  });

  // Inject CSS zoom once page finishes loading
  win.webContents.on('did-finish-load', () => {
    // Force the inner app container to fill screen and scale up
    win.webContents.insertCSS(`
      body, html, #app {
        width: 100% !important;
        height: 100% !important;
        zoom: 1.10 !important; 
      }
    `);
  });

  // Load NUBI Software
  win.loadURL('https://web.nubi.gg/#/');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});