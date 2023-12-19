const { log } = require('console')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/productos', require('./routes/productsRoutes'))
app.listen(port, () => console.log(`Ruta abierta en el puerto ${port}`))