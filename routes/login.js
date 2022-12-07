//Rutas para usuario
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')

//api/usuario
router.post('/', loginController.crearUsuario);
router.get('/',loginController.obtenerUsuario);
router.put('/:id',loginController.actualizarUsuario);
router.get('/:id',loginController.obtenerUsuario);
router.delete('/:id',loginController.elminarUsuario);

module.exports = router;