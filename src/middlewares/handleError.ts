import { ErrorRequestHandler } from 'express'

export const handleError: ErrorRequestHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err

  res
    .status(statusCode)
    .send({ message: statusCode !== 500 ? message : 'Internal server error' })

  next()
}
