const asyncHandler = require('express-async-handler')
const Pedido = require('../model/pedidosModel.js')

const getPedidos = asyncHandler(async (req, res) => {
    const pedidos = await Pedido.find({ user: req.user.id })

    res.status(200).json({ pedidos })
})

const postPedidos = asyncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error("Por favor teclea un nombre de pedido")
    }


    const pedido = await Pedido.create({
        texto: req.body.texto,
        user: req.user.id
    })

    res.status(201).json({ pedido })
})

const putPedidos = asyncHandler(async (req, res) => {

    // Verificamos la existencia de la tarea
    const pedido = await Pedido.findById(req.params.id)
    if (!pedido) {
        res.status(400)
        throw new Error("No se ha encontrado el pedido")
    }

    // Verificamos que la tarea sea del usuario que la quiere modificar
    if (pedido.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no autorizado')
    } else {
        const pedidoUpdated = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json(pedidoUpdated)
    }
})

const deletePedidos = asyncHandler(async (req, res) => {
    const pedido = await Pedido.findById(req.params.id)
    if (!pedido) {
        res.status(400)
        throw new Error("No se ha encontrado el pedido")
    }

    // Verificamos que la tarea sea del usuario que la quiere borrar
    if (pedido.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no autorizado')
    } else {

        await Pedido.deleteOne(pedido)

        res.status(200).json({ id: req.params.id })
    }
})

module.exports = {
    getPedidos,
    postPedidos,
    putPedidos,
    deletePedidos
}