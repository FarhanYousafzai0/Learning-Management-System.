export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Ensure correct status code for errors

    res.status(statusCode).json({
        success: false,  // Indicating failure
        message: err.message || "Something went wrong",
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined // Show stack trace only in development mode
    });
};
