const express = require('express')
const router = express.Router()
const permohonanController = require('../controllers/permohonanController')
const isAdmin = require('../middlewares/isAdmin')
const authentication = require('../middlewares/authentication')

router.get('/', permohonanController.findAll)
router.get('/:id', permohonanController.findOne)

router.use(authentication, isAdmin)

router.post('/', permohonanController.addPermohonan)
router.put('/:id', permohonanController.updatePermohonan)
router.delete('/:id', permohonanController.deletePermohonan)

module.exports = router