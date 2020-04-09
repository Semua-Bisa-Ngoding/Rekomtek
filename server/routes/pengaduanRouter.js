const express = require('express')
const router = express.Router()
const pengaduanController = require('../controllers/pengaduanController')
const authorization = require('../middlewares/authorization')

router.post('/', pengaduanController.addPengaduan)
router.get('/:id', authorization, pengaduanController.findOne)

module.exports = router
