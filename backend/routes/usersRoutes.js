const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, misDatos } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

// Rutas publicas
router.post('/', registrarUser)
router.post('/login', loginUser)

// Rutas privadas
router.get('/data', protect, misDatos)

module.exports = router