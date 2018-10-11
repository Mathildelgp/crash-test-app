const express = require('express');
const userController = require('./controllers/users');
const authController = require('./controllers/auth');
// const userRouter = require('./controllers/products');

const apiRouter = express.Router();

apiRouter.get('/users', userController.findAll);
apiRouter.get('/signup', authController.signup);
apiRouter.get('/signin', authController.signin);

// apiRouter.use(productRouter)
module.exports = apiRouter;