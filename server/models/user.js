const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nama: {
    type: String,
    required: [true, 'Nama lengkap wajib diisi!']
  },
  email: {
    type: String,
    required: [true, 'E-mail wajib diisi!']
  },
  phone: {
    type: Number,
    required: [true, 'Nomor Handphone wajib diisi!']
  },
  username: {
    type: String,
    required: [true, 'Username wajib diisi!']
  },
  password: {
    type: String,
    required: [true, 'Password wajib diisi!']
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    required: true
  },
})

module.exports = mongoose.model('User', UserSchema)