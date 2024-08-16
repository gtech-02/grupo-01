const express = require('express');
const app = express();

app.use(express.json());
// controlers
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');
const UserController = require('./controllers/UserController');
const ImageController = require('./controllers/ImageController');
const OptionController = require('./controllers/OptionController')

// validações
const CategoryValidaçao = require('./middlewares/CategoryMiddlewares/CategoryValidaçao');
const ProductCreateValidation = require('./middlewares/ProductMiddleware/ProductCreateValidation');

// Validações de existencia de ID
const ProductUpdate_DeleteValidation = require('./middlewares/ProductMiddleware/ProductUpdate_DeleteValidation');
const CategoryPut_DeleteValidation = require('./middlewares/CategoryMiddlewares/CategoryPut_DeleteValidation');
const UserPut_DeleteValidadtion = require('./middlewares/UsersMiddlewares/UserPut_DeleteValidation');

//products
app.post('/products',ProductCreateValidation, ProductController.create)
app.get('/products', ProductController.list)
app.put('/products/:id', ProductUpdate_DeleteValidation,ProductController.update)
app.delete('/products/:id',ProductUpdate_DeleteValidation, ProductController.delete)

//category
app.post('/Category', CategoryValidaçao,CategoryController.create)
app.get('/Category', CategoryController.list)
app.put('/Category/:id',CategoryPut_DeleteValidation, CategoryController.update)
app.delete('/Category/:id',CategoryPut_DeleteValidation, CategoryController.delete)

//user
app.post('/users',UserController.create)
app.post('/users',UserController.create)
app.post('/v1/user/token',UserController.create)
app.get('/users',UserController.list)
app.put('/users/:id',UserPut_DeleteValidadtion, UserController.update)
app.delete('/users/:id',UserPut_DeleteValidadtion, UserController.delete)
app.post('/users/login',UserController.login )

//image
app.post('/images', ImageController.create)
app.get('/images', ImageController.list)
app.get('/images/:id', ImageController.listarUma)
app.put('/images/:id', ImageController.update)
app.delete('/images', ImageController.delete)
app.delete('/images/:id', ImageController.deletaUma)

//option
app.post('/option', OptionController.create)
app.get('/option', OptionController.list)
app.get('/option/:id', OptionController.listarUma)
app.put('/option/:id', OptionController.update)
app.delete('/option', OptionController.delete)
app.delete('/option/:id', OptionController.deletaUma)

app.listen(3002);
