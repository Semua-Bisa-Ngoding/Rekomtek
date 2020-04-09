const express = require('express')
const router = express.Router()
const userRouter = require('./userRouter')
const pengaduanRouter = require('./pengaduanRouter')

router.use('/user', userRouter)
router.use('/pengaduan', pengaduanRouter)

module.exports = router