let panes = require("../data/panes");

let baseUrl = "http://localhost:3418"
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
        res.send(panes);
    },
    apiProductDetail: (req,res) => {
        const id = req.params.id;
        let panAEnviar = panes.find((pan) => {
            return pan.id == id;
        })
        res.send(panAEnviar || {});
    },
}
module.exports = controller;