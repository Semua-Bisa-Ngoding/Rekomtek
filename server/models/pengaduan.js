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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Pengaduan', PengaduanSchema)