const express = require('express');
const router = express.Router();
const ejemploDBController = require('../controllers/ejemploBD')

// Mostrar los registros (SELECT * FROM Usuario)
router.get('/mostrarUsuarios', ejemploDBController.getUsuarios);

// Agregar registro (INSERT into Usuario VALUES(); )
router.post('/agregarUsuario', ejemploDBController.postAgregarUsuario);

module.exports = router;