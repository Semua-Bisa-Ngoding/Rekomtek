module.exports = (req, res, next) => {
  try {
    const user = req.user
    if (user.role === 'admin') {
      next()
    } else {
      const error = { name: 'NotAdmin' }
      throw error
    }
  } catch (error) {
    next(error)
  }
}