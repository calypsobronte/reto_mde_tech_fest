//importar el modulo server
const connection = require("../../config/db");
const app = require("../../config/server");
const bcryptjs = require('bcryptjs');
const moment = require('moment'); // Importing the Moment.js module
const { NULL } = require("mysql/lib/protocol/constants/types");

module.exports = app => {
    app.get('/', (req, res) => {
        res.render('../views/home.ejs');
    })

    app.get('/informacion', (req, res) => {
        res.render('../views/informacion.ejs');
    })

    app.post('/contacto', async(req , res)=>{
       const data = req.body;
       connection.query("INSERT INTO contact SET ?", data, async (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('../views/home.ejs', {
                alert: true,
                alertTitle: "Mensaje enviado con exito",
                alertMessage: "Muchas gracias, muy pronto me estare contactando contigo",
                alertIcon: "success",
                showConfirmButton: true,
                timer: 1500,
                ruta: ''
            });
        }
    })
    })
    app.get('*', (req, res) => {
        res.status(400).render('../views/error.ejs', { title: 'No encontrado'})
    })

}

