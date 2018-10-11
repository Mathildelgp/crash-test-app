const express = require('express');
const userRouter = require('./controllers/users');
// const userRouter = require('./controllers/products');

const apiRouter = express.Router();

apiRouter.use(userRouter);
// apiRouter.use(productRouter)

module.exports = apiRouter;