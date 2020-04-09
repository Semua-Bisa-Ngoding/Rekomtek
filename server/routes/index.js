const express = require('express')
const router = express.Router()
const userRouter = require('./userRouter')
const pengaduanRouter = require('./pengaduanRouter')
const permohonanRouter = require('./permohonanRouter')
const authentication = require('../middlewares/authentication')

router.use('/user', userRouter)
router.use('/permohonan', permohonanRouter)

router.use(authentication)

router.use('/pengaduan', pengaduanRouter)

module.exports = router