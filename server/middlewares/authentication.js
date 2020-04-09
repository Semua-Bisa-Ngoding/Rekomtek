const { verifyToken } = require('../helpers/jwt')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.token
    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (error) {
    next(error)
  }
}