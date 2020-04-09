const Pengaduan = require('../models/pengaduan')

module.exports = async (req, res, next) => {
  const id = req.params.id
  try {
    const pengaduan = await Pengaduan.findById(id).populate('user')
    if (!pengaduan) {
      const error = { name: "NotFoundError" }
      throw error
    } else {
      if(pengaduan.user._id == req.user._id) {
        next()
      } else{
        const error = {name: 'UnauthorizeError'}
        throw error
      }
    }
  } catch (error) {
    next(error)
  }

}