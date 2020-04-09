module.exports = (req, res, next) => {
  try {
    const user = req.user
    if (user.role === 'user') {
      next()
    } else {
      const error = { name: 'NotUser' }
      throw error
    }
  } catch (error) {
    next(error)
  }
}