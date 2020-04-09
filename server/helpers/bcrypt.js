const bcrypt = require('bcryptjs')
const salt = 10

module.exports = {
  generateHash(password) {
    return bcrypt.hashSync(password, salt)
  },

  compareHash(password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}