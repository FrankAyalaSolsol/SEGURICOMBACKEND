//Rutas para producto
const express = require('express');
const router = express.Router();
const PreestudioController = require('../controllers/preestudioController')

//api/productos
router.post('/', PreestudioController.crearEstudio);
router.get('/',PreestudioController.obtenerEstudio);
router.get('/:id',PreestudioController.obtenerEstudio);
router.delete('/:id',PreestudioController.elminarEstudio);

module.exports = router;