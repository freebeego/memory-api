import * as dotenv from 'dotenv'
import 'module-alias/register'
import express from 'express'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'
import slowDown from 'express-slow-down'
import cors from 'cors'
import helmet from 'helmet'
import { errors } from 'celebrate'

import { rateLimitConfig, slowDownConfig, corsConfig } from '@config'
import {
  requestLogger,
  errorLogger, logger,
  handleError,
  handleResourceNotFound,
} from '@middlewares'
import router from '@routes'

dotenv.config()

const {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env

const limiter = rateLimit(rateLimitConfig)
const speedLimiter = slowDown(slowDownConfig)

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then(() => {
    const app = express()

    app.use(requestLogger)
    app.use(cors(corsConfig), limiter, speedLimiter, helmet())
    app.use(express.json())
    app.use(router, handleResourceNotFound)
    app.use(errorLogger, errors(), handleError)

    app.listen(PORT, () => logger.info(`App listening on port ${PORT}`))
  })
  .catch((e) => logger.log('error', 'Error: %s', e))
