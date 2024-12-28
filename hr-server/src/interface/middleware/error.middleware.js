
const errorHandler = (err, req, res, next) => {
  // Use the `statusCode` from the error if available; default to 500 for internal server errors.
  let { statusCode, message } = err;
  if (!statusCode) statusCode = 500; // Default to 500 if no status code is set.
  // Log the full error for debugging purposes.
  console.error('Error stack:', err.stack);
  // Determine if the error is operational or not.
  res.status(statusCode).json({
    status: 'error',
    message: err.isOperational ? message : 'Something went wrong!',
  });
};

export default errorHandler;
