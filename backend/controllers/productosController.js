const asyncHandler = require('express-async-handler')
const Producto = require('../model/productosModel')

const getProductos = asyncHandler(async (req, res) => {
    const productos = await Producto.find()
    res.status(200).json({ productos })
})

const postProductos = asyncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error("Por favor teclea un nombre de producto")
    }


    const producto = await Producto.create({
        texto: req.body.texto
    })

    res.status(201).json({ producto })
})

const putProductos = asyncHandler(async (req, res) => {

    const producto = await Producto.findById(req.params.id)
    if (!producto) {
        res.status(400)
        throw new Error("No se ha encontrado el producto")
    }
    const productoUpdated = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(productoUpdated)
})

const deleteProductos = asyncHandler(async (req, res) => {
    const producto = await Producto.findById(req.params.id)
    if (!producto) {
        res.status(400)
        throw new Error("No se ha encontrado el producto")
    }

    await Producto.deleteOne(producto)

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getProductos,
    postProductos,
    putProductos,
    deleteProductos
}