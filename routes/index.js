const router = require('express').Router();

const resultsRouter = require('./results');

router.use('/results', resultsRouter);

module.exports = router;
