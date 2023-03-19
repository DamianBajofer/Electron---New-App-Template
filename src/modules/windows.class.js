/**
 * Importar clases necesarias para la creacion de ventanas.
 */
const { app, BrowserWindow } = require("electron")

/**
 * La clase `Windows` es la encargada de crear las ventanas que se
 * necesiten usar durante la ejecucion de todo el programa.
 */
class Windows{

    /**
     * Configuracion basica de la ventana a crear.
     * @param {string} title    Titulo de la ventana
     * @param {string} icon     Icono de la ventana
     * @param {number} width    Ancho de la ventana
     * @param {number} height   Alto de la ventana
     * @param {object} view     Vista principal de la ventana
     * @param {object} views    Vistas adicionales de la ventana
     */
    constructor(title, icon, width, height, view, views){
        this.title  = title ? title : "Electron App"
        this.icon   = icon ? icon : `${app.getAppPath()}/icon.png`
        this.width  = width ? width : 400
        this.height = height ? height : 500
        this.view   = view
        this.views  = views ? views : []
    }

    /**
     * Crea una ventana de aplicacion.
    */
    Create(){
        this.window = new BrowserWindow({
            title: this.title,
            icon: this.icon,
            width: this.width,
            height: this.height,
            center: true,
            show: false,
            frame: false,
            resizable: false,
            fullscreenable: false,
            maximizable: false,
            transparent: false,
            webPreferences: {
                nodeIntegration: true
            }
        })

        /**
         * Evento al terminar de cargar contenido en la ventana.
         */
        this.window.on("ready-to-show", () => {
            this.window.webContents.send("ready-to-show", {
                title: this.title,
                icon: this.icon,
                views: this.views,
                id: this.window.id
            })
            if(app.Dev){
                this.window.webContents.openDevTools()
            }
        })

        /**
         * Evento al cerrar la ventana.
         */
        this.window.on("close", () => {
            app.quit()
        })

        /**
         * Cargar la vista en la ventana.
         */
        this.window.loadURL(this.view)
    }

}
/**
 * Exportar modulo para utilizarlo.
 */
module.exports = { Windows }