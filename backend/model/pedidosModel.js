const mongoose = require('mongoose')


const pedidoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
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

module.exports = mongoose.model('Pedido', pedidoSchema)