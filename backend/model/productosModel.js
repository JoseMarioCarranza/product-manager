const mongoose = require('mongoose')


const productoSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'Por favor teclea una descripción']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Producto', productoSchema)