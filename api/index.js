const express = require('express');
const userController = require('./controllers/users');
const authController = require('./controllers/auth');
// const userRouter = require('./controllers/products');

const apiRouter = express.Router();

apiRouter.get('/users', userController.findAll);

apiRouter.post('/signup', authController.signup);
apiRouter.post('/signin', authController.signin);
apiRouter.get('/validate', authController.validate);

// apiRouter.use(productRouter)
module.exports = apiRouter;