import { RequestHandler } from 'express'
import { NotFoundError } from '@errors'

export const handleResourceNotFound: RequestHandler = (req, res, next) => {
  next(new NotFoundError())
}
