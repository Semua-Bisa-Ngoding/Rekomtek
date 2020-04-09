const Pengaduan = require('../models/pengaduan')

class PengaduanController {
  static async addPengaduan(req, res, next) {
    try {
      const newPengaduan = {
        judul: req.body.judul,
        lokasi: req.body.lokasi,
        tanggal: req.body.tanggal,
        deskripsi: req.body.deskripsi
      }
  
      const pengaduan = await Pengaduan.create(newPengaduan)
      res.status(201).json(pengaduan)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PengaduanController