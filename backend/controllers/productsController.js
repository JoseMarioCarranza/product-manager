const getProductos = (req, res) => {
    res.status(200).json({ message: "Obtener productos" })
}

const postProductos = (req, res) => {
    res.status(201).json({ message: "Crear producto" })
}

const putProductos = (req, res) => {
    res.status(200).json({ message: `Modificar el producto ${req.params.id}` })
}

const deleteProductos = (req, res) => {
    res.status(200).json({ message: `Eliminar el producto ${req.params.id}` })
}

module.exports = {
    getProductos,
    postProductos,
    putProductos,
    deleteProductos
}