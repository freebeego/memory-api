const Result = require('../models/result');

const getResults = (req, res, next) => {
  Result.find({})
    .then((result) => res.status(200).send(result))
    .catch(next);
};

const createResult = (req, res, next) => {
  const { name, time } = req.body;

  Result.create({ name, time })
    .then((result) => res.status(200).send(result))
    .catch(next);
};

module.exports = { getResults, createResult };
