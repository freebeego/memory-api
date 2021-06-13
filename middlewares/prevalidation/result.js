const { celebrate, Joi } = require('celebrate');

const resultValidator = celebrate({
  body: Joi.object().max(2).keys({
    name: Joi.string().max(50).required(),
    time: Joi.number().max(1000000).required(),
  }),
});

module.exports = { resultValidator };
