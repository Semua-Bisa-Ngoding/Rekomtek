const Pengaduan = require('../models/pengaduan')

class PengaduanController {
  static async addPengaduan(req, res, next) {
    try {
      const newPengaduan = {
        judul: req.body.judul,
        lokasi: req.body.lokasi,
        tanggal: req.body.tanggal,
        deskripsi: req.body.deskripsi,
        user: req.user._id
      }

      const pengaduan = await Pengaduan.create(newPengaduan)
      res.status(201).json(pengaduan)
    } catch (error) {
      next(error)
    }
  }

  static async findOne(req, res, next) {
    console.log(req.params)
    try {
      const id = req.params.id

      const pengaduan = await Pengaduan.findById(id).populate('user')
      console.log({ pengaduan })

      if (!pengaduan) {
        const error = { name: 'NotFoundError' }
        throw error
      } else {
        res.status(200).json(pengaduan)
      }
    } catch (error) {
      next(error)
    }
  }

  static async findAll(req, res, next) {
    try {
      let user = req.user
      user.role === 'admin' ? user = {} : user = { user: req.user._id }

      const pengaduan = await Pengaduan.find(user).populate('user')
      res.status(200).json(pengaduan)
    } catch (error) {
      next(error)
    }
  }

  static async updatePengaduan(req, res, next) {
    try {
      const id = req.params.id
      const updatedPengaduan = {
        judul: req.body.judul,
        lokasi: req.body.lokasi,
        tanggal: req.body.tanggal,
        deskripsi: req.body.deskripsi,
      }

      const updated = await Pengaduan.findByIdAndUpdate(id, updatedPengaduan, { new: true })
      res.status(200).json(updated)
    } catch (error) {
      next(error)
    }
  }

  static async deletePengaduan(req, res, next) {
    try {
      const id = req.params.id
      const deleted = await Pengaduan.findByIdAndDelete(id)
      res.status(200).json(deleted)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PengaduanController