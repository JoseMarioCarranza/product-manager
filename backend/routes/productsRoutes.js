const express = require('express')
const router = express.Router()
const { getProductos,
    postProductos,
    putProductos,
    deleteProductos } = require('../controllers/productosController')

router.route('/').get(getProductos).post(postProductos)

router.route('/:id').put(putProductos).delete(deleteProductos)

module.exports = router