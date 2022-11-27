import { Router } from 'express'
import { resultValidator } from '@middlewares'
import { getResults, createResult } from '@controllers'

const resultsRouter = Router()

resultsRouter.get('/', getResults)
resultsRouter.post('/', resultValidator, createResult)

export default resultsRouter
