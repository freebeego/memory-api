import { Options as rateLimitConfigOptions } from 'express-rate-limit'
import { Options as slowDownConfigOptions } from 'express-slow-down'

export const rateLimitConfig: Partial<rateLimitConfigOptions> = {
  windowMs: 60 * 1000,
  max: 300,
  message: 'Too many requests, please try again later',
}

export const slowDownConfig: slowDownConfigOptions = {
  windowMs: 10 * 1000,
  delayAfter: 100,
  delayMs: 100,
}
