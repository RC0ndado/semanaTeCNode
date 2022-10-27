const Usuario = require('../models/ejemploBD');

exports.getUsuarios = async (req, res) => {
    //SELECT * FROM usuario;
    registros = await Usuario.findAll()
    try{
        registros = await Usuario.findAll()
        res.send(registros)

    }catch(e){
        console.log(e)
        res.send(e)
    }


}

exports.postAgregarUsuario = (req, res) => {
    console.log(req.body)
    //INSERT INTO Usuario VALUES ()
    Usuario.create(req.body)
        .then(resultado => {
            console.log("Registro exitoso") // Servidor
            res.send("Registro exitoso") //CLiente
        })
        .catch (error => {
            console.log(error)
            res.send("Ocurrió un error")
        })
}