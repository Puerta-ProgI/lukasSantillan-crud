let db = require("../database/models/index");
let panes = require("../data/panes");
const service = {
    listarPanes:async () => {
        let productos = await db.Products.findAll()
        return productos
    },
    buscarPan: async (id) =>{
        let pan = await db.Products.findOne({
            where: {
                id: id
            }
        })
        return pan || {}
    },
    //create
    create: async (data) =>{
        let panACrear = {
            // id: panes[panes.length-1].id+1,
            name: data.name,
            // category: data.category,
            description: data.description,
            // precio: data.precio
        }
        // panes.push(panACrear)
        db.Products.create(panACrear)
    },
    //destroy
    delete: async (id) =>{
        // let panesFiltrados = panes.filter((pan)=> pan.id != id)
        // panes = panesFiltrados
        // return panes
        db.Products.destroy({
            where: {
                id: id
            }
        })
    },
    //update
    update: async (data,id) => {
        let panAEditar = {
            // id: panes[panes.length-1].id+1,
            name: data.name,
            // category: data.category,
            description: data.description,
            // precio: data.precio
        }    

        db.Products.update(panAEditar, {
            where: {
                id: id
            }
        })
    }
};

module.exports = service