const app = require('../../startup.js')
const UsuarioModel = require('../models/usuariosModel.js')
const path = require('path')

app.get("/getUsuario", (req, res) => {
    const usuario = new UsuarioModel('Laura', 'lauramaromba.com', '189977787456', 1000)
    const retorno ={
        'nome':usuario.name,
        'email':usuario.description 
    }

    res.json(retorno)
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('mvc/views/usuarioView.html'))
})