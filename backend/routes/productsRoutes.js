const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { getProductos,
    postProductos,
    putProductos,
    deleteProductos } = require('../controllers/productosController')

router.route('/').get(getProductos).post(protect, postProductos)

router.route('/:id').put(protect, putProductos).delete(protect, deleteProductos)

module.exports = router