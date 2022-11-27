import { Result } from '@models'
import { RequestHandler } from 'express'

export const getResults: RequestHandler = (req, res, next) => {
  Result.find({})
    .then((result) => res.status(200).send(result))
    .catch(next)
}

export const createResult: RequestHandler = (req, res, next) => {
  const { name, time } = req.body;

  Result.create({ name, time })
    .then((result) => res.status(200).send(result))
    .catch(next)
}
