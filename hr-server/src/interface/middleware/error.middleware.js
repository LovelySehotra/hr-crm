
const errorHandler = (err, req, res, next) => {
  
  let { statusCode, message } = err;
  if (!statusCode) statusCode = 500; 
 
  console.error('Error stack:', err.stack);
  res.status(statusCode).json({
    status: 'error',
    message: err.isOperational ? message : 'Something went wrong!',
  });
};

export default errorHandler;
