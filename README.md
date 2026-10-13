# NUBI Control Center (Desktop App)

An unofficial, standalone desktop application wrapper for the **NUBI Keyboard Software** (`https://web.nubi.gg/#/`), built using **Electron**.

This application encapsulates the web-based configuration tools for NUBI devices into a native desktop experience, featuring full hardware connection support via WebHID, WebUSB, and Web Bluetooth APIs.

---

## Features

- **Native Desktop Experience:** Runs NUBI software directly in a clean window without browser tabs or address bars.
- **Hardware Compatibility:** Configured with permissions for WebHID, WebUSB, and Web Bluetooth to enable seamless device detection and pairing.
- **Custom UI Scaling:** Optimized layout dimensions to prevent web component overflow on high-DPI displays.
- **Installer Included:** Packaged using NSIS for simple setup on Windows systems.

---

## Download & Installation

The easiest way to install NUBI Control Center on Windows is using the official installer executable:

1. Go to the [Releases](https://github.com/timurtom/nubi-app/releases) section of this repository.
2. Download the latest `NUBI.Control.Center.Setup.1.x.x.exe` file.
3. Run the installer and follow the setup wizard.

---

## Building from Source

If you want to modify or build the project from source, follow the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (included with Node.js)

### Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/timurtom/nubi-app.git
   cd nubi-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

   > **Note on Script Security:** If npm blocks Electron installation scripts, approve it using:
   > ```bash
   > npm install-scripts approve electron
   > ```

3. **Run in Development Mode**
   ```bash
   npm start
   ```

4. **Build Windows Installer (`.exe`)**
   ```bash
   npm run build
   ```
   Upon build completion, the installer executable (`.exe`) will be generated inside the `dist/` directory.

---

## Project Structure

```text
├── main.js          # Electron main process (Window management & hardware permissions)
├── package.json     # Project metadata and electron-builder setup
└── dist/            # Output folder for compiled installers (generated after build)
```

---

## Disclaimer

This software is an independent open-source desktop wrapper around the official NUBI web application (`web.nubi.gg`). All trademarks, brand names, and software rights belong to **NUBI**.


PS that weird font isnt a bug ( i think ), its kinda how it is
