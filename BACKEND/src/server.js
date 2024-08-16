const express = require('express');
const app = express();

app.use(express.json());

const ProductController = require('./controllers/ProductController');
const ProductCreateValidation = require('./middlewares/ProductMiddleware/ProductCreateValidation');
const CategoryController = require('./controllers/CategoryController');
const ProductUpdateValidation = require('./middlewares/ProductMiddleware/ProductUpdateValidation');
const UserController = require('./controllers/UserController');
const CategoryValidaçao = require('./middlewares/CategoryMiddlewares/CategoryValidaçao');

app.post('/products',ProductCreateValidation, ProductController.create)
app.get('/products', ProductController.list)
app.put('/products/:id',ProductUpdateValidation, ProductController.update)
app.delete('/products/:id', ProductController.delete)

app.post('/Category', CategoryValidaçao,CategoryController.create)
app.get('/Category', CategoryController.list)
app.put('/Category/:id', CategoryController.update)
app.delete('/Category/:id', CategoryController.delete)

app.post('/v1/user/token',UserController.create)
app.get('/users',UserController.list)
app.put('/users',UserController.update)
app.delete('/users',UserController.create)

app.listen(5002);
