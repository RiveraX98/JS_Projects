# Broken App Issues

1. Added error handler
2. "catch" was not catching the error added "(e)"
3. request body was not being parsed - added app.use(express.json())
4. results is a promise object
5. no need to use "JSON.stringify" replaced with "res.json()"
6. added express error for better error handling
