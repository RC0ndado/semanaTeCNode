const path = require('path');
const fileUpload = require('express-fileupload');
const SashiDoTeachableMachine = require('@sashido/teachablemachine-node');

const model = new SashiDoTeachableMachine({
    modelUrl: "https://teachablemachine.withgoogle.com/models/s8siFg5eo/"
})
exports.getFormularioImagen = (req, res) => {
    res.sendFile(path.join(__dirname, '..','views', 'formularioImagen.html'))
}

exports.postUpload = async(res,req)=>{
    const {image} =req.files
    if (!image) return res.send("Error al enviar imagen")
    await image.mv(path.join(__dirname, '..', 'public','img', image.name))

    model.classify({
        imagUrl: "http://localhost:8081/img/" + image.name
    }).then((prediccion) => {
        res.send(prediccion)
    }).catch((e)=>res.send(e))
        //image.mv(path.join(__dirname, '..','public','img', image.name))
        //res.send('Imagen subida exitosamente')
}