import { ErrorRequestHandler } from 'express'
import { config } from '../../config'
import ApiError from '../../errors/ApiErros'
import handleValidationError from '../../errors/handleValidationError'
import { IGenericErrorMessage } from '../../interfaces/error'
import { errorlogger } from '../../shared/logger'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // When development --> then show data in colsole and production level show it in logs folder
  config.env === 'development'
    ? console.log('🚀 globalErrorHandler -->', error)
    : errorlogger.error('🚀 globalErrorHandler --> ', error)

  let statusCode = 500
  let message = 'Something went wrong!'
  let errorMessages: IGenericErrorMessage[] = []

  // Handle Mongoose Validation Errors
  if (error?.name === 'validationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  }

  // Handle Custom API Errors --> extend by oop (throw new error) to ApiError
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error.message
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : []
  }

  // Handle Generic Errors --> (throw new error)
  else if (error instanceof Error) {
    {
      message = error?.message
      errorMessages = error?.message
        ? [{ path: '', message: error?.message }]
        : []
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    // In production level don't show error stack
    stack: config.env !== 'production' ? error?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
