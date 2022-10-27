const express = require('express')
const router = express.Router();
const modeloIAController = require('../controllers/modeloIA')


router.get('/formularioImagen', modeloIAController.getFormularioImagen);
router.get('/upload', modeloIAController.postUpload);

module.exports = router;