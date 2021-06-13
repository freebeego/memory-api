const resultsRouter = require('express').Router();

const { resultValidator } = require('../middlewares/prevalidation/result');

const {
  getResults,
  createResult,
} = require('../controllers/results');

resultsRouter.get('/', getResults);
resultsRouter.post('/', resultValidator, createResult);

module.exports = resultsRouter;
