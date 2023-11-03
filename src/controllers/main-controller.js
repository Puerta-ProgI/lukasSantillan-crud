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
    apiProducts: (req,res) => {
        let panes = products.listarPanes()
        res.send(panes);
    },
    apiProductDetail: (req,res) => {
        const id = req.params.id;
        let panAEnviar = products.buscarPan(id)
        res.send(panAEnviar || {});
    },
    apiProductCreate: (req,res) => {
        res.send(req.body)
    }
}
module.exports = controller;