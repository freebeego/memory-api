module.exports = {
  rateLimit: {
    errorMessage: 'Too many requests, please try again later.',
  },
  http: {
    clientError: {
      notFoundError: {
        resourceNotFound: 'Resource not found',
      },
    },
    serverError: {
      internalServerError: 'Internal server error',
    },
  },
};
