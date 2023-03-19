/**
 * Importaremos los modulos necesarios que vamos a utilizar durante toda nuestra
 * aplicacion.
 * Obviamente podremos presindir de algunos en caso de no ser utilizados.
 */
window.$ = window.jQuery = require("jquery")
const {remote, ipcRenderer} = require("electron")
const BrowserWindow = remote.BrowserWindow
const dialog = require("electron").remote.dialog
const app = require("electron").remote.app
const fs = require("fs")

/**
 * Aqui vamos a predefinir variables globales para poder utilizarlas en toda
 * nuestra app.
 * De esta manera podriamos acceder a contenido de nuestro proyecto de manera mas
 * facil y rapida.
 * Por ejemplo, seria mas util establecer donde estan los iconos de nuestra app
 * de esta manera:
 * APP_ICONS_PATH
 * En lugar de tener que hacer:
 * app.getAppPath()/src/images/icons
 */