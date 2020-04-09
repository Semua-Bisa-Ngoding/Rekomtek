const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PengaduanSchema = new Schema({
  judul: String,
  lokasi: String,
  tanggal: {
    type: Date,
    default: Date.now()
  },
  deskripsi: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Pengaduan', PengaduanSchema)