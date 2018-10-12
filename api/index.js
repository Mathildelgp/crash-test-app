const express = require('express');
const userController = require('./controllers/users');
const authController = require('./controllers/auth');
// const userRouter = require('./controllers/products');

const apiRouter = express.Router();


// protect route
apiRouter.get('/users', authController.verify_token, userController.findAll);

apiRouter.post('/signup', authController.signup);
apiRouter.post('/signin', authController.signin);

// apiRouter.use(productRouter)
module.exports = apiRouter;