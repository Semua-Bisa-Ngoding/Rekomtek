module.exports = (err, req, res, next) => {
  console.log(err, 'error nih')
  try {
    let error = new Error
    switch (err.name) {
      case 'ValidationError':
        error.statusCode = 400
        error.message = err.message
        throw error

      case 'JsonWebTokenError':
        error.statusCode = 400
        error.message = 'Invalid token!'
        throw error

      case 'NotAdmin':
        error.statusCode = 400
        error.message = 'Only admin can change!'
        throw error

      case 'NotFoundError':
        error.statusCode = 404
        error.message = 'Data not found!'
        throw error

      case 'UnauthorizeError':
        error.statusCode = 401
        error.message = 'Unauthorize!'
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