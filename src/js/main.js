/**
 * Aqui vamos a establecer unas dimensiones exactas de cada elemento de cada una
 * de las ventanas que podamos ir creando, para de esta manera no tener problemas
 * de visualizacion en ningun momento, además, de que haremos que cada ventana
 * se pueda minimizar, maximizar y cerrar desde sus respectivos botones sin tener
 * problemas o excepciones.
 * @param {event} event 
 */

window.onload = event => {
    ipcRenderer.on("ready-to-show", (event, win) => {

        // Titulo e Icono del Toolbar //
        $("#toolbar-title").html(win.title)
        $("#toolbar-icon").css({"background-image": win.icon})
    
        // Dimensiones del Toolbar y APP //
        let AppWidth       = $("#app")[0].getBoundingClientRect().width
        const AppHeight    = $("#app")[0].getBoundingClientRect().height
        $("#app").css({"width": `${AppWidth-4}px`, "height": `${AppHeight-4}px`})
        AppWidth           = $("#app")[0].getBoundingClientRect().width
        const IconWidth    = $("#toolbar-icon")[0].getBoundingClientRect().width
        const ActionsWidth = $("#toolbar-actions")[0].getBoundingClientRect().width
        $("#toolbar-title").css({"width": `${(AppWidth-(IconWidth+ActionsWidth))-2}px`})
    
        /**
         * Aqui se cargaran todas las vistas que podramos querer para cada una de las ventanas
         * de esta manera podemos tener una ventana que tenga varias vistas en su interior
         * y podremos ir cambiandolas con un menu como el que ya viene predefinido en nuestra app.
         */
        win.views.forEach(view => {
            $("#view").append(fs.readFileSync(view).toString())
        })
        
        // Eventos de Toolbar //
        $("#toolbar-actions-minimize").on("click", () => {
            BrowserWindow.fromId(win.id).minimize()
        })
        $("#toolbar-actions-close").on("click", () => {
            BrowserWindow.fromId(win.id).close()
        })
    
        // Mostrar ventana //
        BrowserWindow.fromId(win.id).show()
    
    })
}