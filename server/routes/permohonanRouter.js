const express = require('express')
const router = express.Router()
const permohonanController = require('../controllers/permohonanController')

router.post('/', permohonanController.addPermohonan)

module.exports = router