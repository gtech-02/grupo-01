const express = require('express');
const app = express();

app.use(express.json());
// controlers
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');
const UserController = require('./controllers/UserController');
// validações
const CategoryValidaçao = require('./middlewares/CategoryMiddlewares/CategoryValidaçao');
const ProductCreateValidation = require('./middlewares/ProductMiddleware/ProductCreateValidation');
// Validações de existencia de ID
const ProductUpdate_DeleteValidation = require('./middlewares/ProductMiddleware/ProductUpdate_DeleteValidation');
const CategoryPut_DeleteValidation = require('./middlewares/CategoryMiddlewares/CategoryPut_DeleteValidation');
const UserPut_DeleteValidadtion = require('./middlewares/UsersMiddlewares/UserPut_DeleteValidation');

app.post('/products',ProductCreateValidation, ProductController.create)
app.get('/products', ProductController.list)
app.put('/products/:id', ProductUpdate_DeleteValidation,ProductController.update)
app.delete('/products/:id',ProductUpdate_DeleteValidation, ProductController.delete)

app.post('/Category', CategoryValidaçao,CategoryController.create)
app.get('/Category', CategoryController.list)
app.put('/Category/:id',CategoryPut_DeleteValidation, CategoryController.update)
app.delete('/Category/:id',CategoryPut_DeleteValidation, CategoryController.delete)

app.post('/users',UserController.create)
app.post('/v1/user/token',UserController.create)
app.get('/users',UserController.list)
app.put('/users/:id',UserPut_DeleteValidadtion, UserController.update)
app.delete('/users/:id',UserPut_DeleteValidadtion, UserController.delete)
app.post('/users/login',UserController.login )

app.listen(3002);
