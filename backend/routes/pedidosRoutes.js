const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { getPedidos,
    postPedidos,
    putPedidos,
    deletePedidos } = require('../controllers/pedidosController')

router.route('/').get(protect, getPedidos).post(protect, postPedidos)

router.route('/:id').put(protect, putPedidos).delete(protect, deletePedidos)

module.exports = router