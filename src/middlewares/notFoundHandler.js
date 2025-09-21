export const notFoundHandler = (req, res, next) => {
    console.log('all check');
    res.status(404).json({
      message: 'Route not found',
    });
  };