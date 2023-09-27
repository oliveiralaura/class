const express = require('express')

const app = express()

app.listen(3000, () => console.log("Online Server On Port 3000"))

module.exports = app

// const itemsControllers = require('./mvc/controllers/itemsController')
const usuarioControllers = require('./mvc/controllers/usuarioController')
const personagensControllers = require('./mvc/controllers/personagensController')
const promocaoControllers = require('./mvc/controllers/promocaoController')
const vendaControllers = require('./mvc/controllers/vendaController')
const skinControllers = require('./mvc/controllers/skinController')
const missaoControllers = require('./mvc/controllers/missaoController')
const logacessoControllers = require('./mvc/controllers/logacessoController')
const itemControllers = require('./mvc/controllers/itemController')
const gamerControllers = require('./mvc/controllers/gamerController')
const descontoControllers = require('./mvc/controllers/descontoController')
const cupomControllers = require('./mvc/controllers/cupomController')
const coinControllers = require('./mvc/controllers/coinController')
const atrativoControllers = require('./mvc/controllers/atrativoController')