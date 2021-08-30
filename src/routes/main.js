const express = require('express')
const router = express.Router()

const {index, admin, login, register, products, detail} = require('../controllers/mainController')

router.get('/', index)
router.get('/admin', admin)
router.get('/login', login)
router.get('/register', register)
router.get('/detail', detail)
router.get('/products', products)

module.exports = router