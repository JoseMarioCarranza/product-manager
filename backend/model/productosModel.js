const mongoose = require('mongoose')


const productoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requiered: true,
        ref: 'User'
    },
    texto: {
        type: String,
        required: [true, 'Por favor teclea una descripción']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Producto', productoSchema)