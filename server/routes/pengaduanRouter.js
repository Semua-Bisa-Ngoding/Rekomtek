const express = require('express')
const router = express.Router()
const pengaduanController = require('../controllers/pengaduanController')
const authorization = require('../middlewares/authorization')
const isUser = require('../middlewares/isUser')

router.get('/', pengaduanController.findAll)
router.post('/', isUser, pengaduanController.addPengaduan)
router.get('/:id', authorization, pengaduanController.findOne)
router.put('/:id', authorization, pengaduanController.updatePengaduan)
router.delete('/:id', authorization, pengaduanController.deletePengaduan)

module.exports = router
