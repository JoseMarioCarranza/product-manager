const asyncHandler = require('express-async-handler')

const getProductos = asyncHandler((req, res) => {
    res.status(200).json({ message: "Obtener productos" })
})

const postProductos = asyncHandler((req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error("Por favor teclea un nombre de producto")
    }
    res.status(201).json({ message: "Crear producto" })
})

const putProductos = asyncHandler((req, res) => {
    res.status(200).json({ message: `Modificar el producto ${req.params.id}` })
})

const deleteProductos = asyncHandler((req, res) => {
    res.status(200).json({ message: `Eliminar el producto ${req.params.id}` })
})

module.exports = {
    getProductos,
    postProductos,
    putProductos,
    deleteProductos
}