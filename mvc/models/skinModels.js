const Db = require('../../repositorio/database.js')

class Skin {

    categoriaSkin
    nomeSkin
    descSkin
    generoSkin
    valorSkin
    raridadeSkin
    foto1Skin
    foto2Skin

    constructor(nomeSkin, descSkin, raridadeSkin){
        this.nomeSkin = nomeSkin
        this.descSkin = descSkin
        this.raridadeSkin = raridadeSkin
    }

    getAllSkins(){
        const db = new Db()

        db.getConnection().query('select * from skins', (err, results, fields) => {
            console.log(results)
        })
    }

    // pegarDadosJson(){
       
    //     return{
    //         "nome": this.nomeSkin,
    //         'descricao': this.descSkin,
    //         'raridade': this.raridadeSkin
    //     }

    // }
}


module.exports = Skin;

