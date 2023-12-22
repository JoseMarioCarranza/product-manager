const { log } = require('console')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/middleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/productos', require('./routes/productsRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Ruta abierta en el puerto ${port}`))