let panes = require("../data/panes");
const service = {
    listarPanes:() => {
        return panes
    },
    buscarPan: (id) =>{
        let panes = service.listarPanes()
        let panAEnviar = panes.find((pan) => {
            return pan.id == id;
        })
        return panAEnviar || {}
    }
}

module.exports = service