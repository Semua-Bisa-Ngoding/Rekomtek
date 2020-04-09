const express = require('express')
const router = express.Router()
const pengaduanController = require('../controllers/pengaduanController')

router.post('/', pengaduanController.addPengaduan)

module.exports = router
