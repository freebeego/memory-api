import { celebrate, Joi } from 'celebrate'

export const resultValidator = celebrate({
  body: Joi.object().max(2).keys({
    name: Joi.string().max(50).required(),
    time: Joi.number().max(1000000).required(),
  }),
})
