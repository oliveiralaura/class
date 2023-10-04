const skinModel = require('../models/skinModels.js')

module.exports = (app) => {
    app.get("/getskin", (req, res) => {
    const skin = new skinModel('Laura', 'laura maromba', 10000)
    
        skin.getAllSkins()

    res.send(skin.nomeSkin)
})
}

