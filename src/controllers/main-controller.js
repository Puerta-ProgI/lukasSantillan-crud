const products = require("../services/products-services")
let baseUrl = "http://localhost:3031"
let url = '/api'

const controller = {
    home: (req, res) => {
        res.redirect(url);
    },
    apiHome: (req,res) => {
        res.send({
            productos: baseUrl + url + "/productos",
        });
    },
    apiProducts: async (req,res) => {
        let panes = await products.listarPanes()
        res.send(panes);
    },
    apiProductDetail: async (req,res) => {
        const id = req.params.id;
        let panAEnviar = await products.buscarPan(id)
        res.send(panAEnviar || {});
    },
    apiProductCreate: (req,res) => {
        products.create(req.body)

        res.redirect("/api/productos")
    },
    apiProductDelete: (req,res) => {
        products.delete(req.params.id)

        res.redirect("/api/productos")
    }
}
module.exports = controller;