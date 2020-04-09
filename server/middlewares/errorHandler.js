module.exports = (err, req, res, next) => {
  try {
    let error = new Error
    switch (err.name) {
      case 'ValidationError':
        error.statusCode = 400
        error.message = err.message
        throw error
    
      default:
        error.statusCode = 500
        error.message = err.message
        throw error
    }
  } catch (error) {
      res.status(error.statusCode || 500).json(error.message || error)
  }
}