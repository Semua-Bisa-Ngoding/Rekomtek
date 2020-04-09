const User = require('../models/user')
const { generateToken } = require('../helpers/jwt')
const { compareHash } = require('../helpers/bcrypt')
class UserController {
  static async register(req, res, next) {
    try {
      const newUser = {
        nama: req.body.nama,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      }
      const user = await User.create(newUser)
      res.status(201).json(user)

    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    let error = {
      statusCode: 404,
      message: 'Username/password salah!'
    }
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })

      if (!user) {
        throw error
      } else {
        if(compareHash(password, user.password)) {
          const token = generateToken({_id: user._id, username: user.username, role: user.role})
          res.status(200).json({_id: user._id, username: user.username, role: user.role, token})
        } else {
          throw error
        }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController