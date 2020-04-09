const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermohonanSchema = new Schema({
  jenisIzin: String,
  nomor: Number,
  nama: String,
  alamat: String,
  phone: Number,
  email: String,
  sumberAir: String,
  longitude: Number,
  latitude: Number,
  kelurahan: String,
  kecamatan: String,
  kabupaten: String,
  provinsi: String,
  balai: String,
  wilayahSungai: String,
  DAS: String,
  tujuan: String,
  caraPengambilan: String,
  caraPembuangan: String,
  literPerDetik: Number,
  jamPerHari: Number,
  hariPerBulan: Number,
  volPerBulan: Number,
  jangkaWaktu: Number,
  tujuanAir: String,
  tipe: String,
  jadwal: String,
  metode: String
})

module.exports = mongoose.model('Permohonan', PermohonanSchema)