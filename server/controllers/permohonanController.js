const Permohonan = require('../models/permohonan')

class PermohonanController {
  static async addPermohonan(req, res, next) {
    try {
      const permohonan = await Permohonan.create(req.body)
      res.status(201).json(permohonan)
    } catch (error) {
      next(error)
    }
  }

  static async findOne(req, res, next) {
    try {
      const id = req.params.id
      const permohonan = await Permohonan.findById(id)
      if (!permohonan) {
        const error = { name: 'NotFoundError' }
        throw error
      } else {
        res.status(200).json(permohonan)
      }
    } catch (error) {
      next(error)
    }
  }

  static async findAll(req, res, next) {
    try {
      const permohonan = await Permohonan.find({})
      res.status(200).json(permohonan)
    } catch (error) {
      next(error)
    }
  }

  static async updatePermohonan(req, res, next) {
    try {
      const id = req.params.id
      const updatedPermohonan = req.body

      const updated = await Permohonan.findByIdAndUpdate(id, updatedPermohonan, { new: true })
      res.status(200).json(updated)
    } catch (error) {
      next(error)
    }
  }

  static async deletePermohonan(req, res, next) {
    try {
      const id = req.params.id
      const deleted = await Permohonan.findByIdAndDelete(id)
      res.status(200).json(deleted)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PermohonanController