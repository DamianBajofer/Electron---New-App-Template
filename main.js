const { app, dialog } = require("electron")
const { Windows } = require(`${app.getAppPath()}/src/modules/windows.class`)
const {autoUpdater} = require("electron-updater")
app.allowRendererProcessReuse = true
app.Dev = true
app.updater = autoUpdater
app.updater.autoDownload = false
if(app.Dev){
	require("electron-reload")(__dirname)
}
app.on("ready", async () => {
    const main = new Windows(`Launcher - World of Pandemic`, null, 850, 500, `${app.getAppPath()}/src/views/main.html`, [])
    main.Create()
})