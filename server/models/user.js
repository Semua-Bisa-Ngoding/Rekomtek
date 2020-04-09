const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { generateHash } = require('../helpers/bcrypt')

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
  }
})

UserSchema.pre('save', next => {
  this.password = generateHash(this.password)
  next()
})

module.exports = mongoose.model('User', UserSchema)