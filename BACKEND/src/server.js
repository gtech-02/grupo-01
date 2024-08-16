const express = require('express');
const app = express();

app.use(express.json());
// controlers
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');
const UserController = require('./controllers/UserController');
const ImageController = require('./controllers/ImageController');

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
app.get('/users',UserController.list)
app.put('/users/:id',UserPut_DeleteValidadtion, UserController.update)
app.delete('/users/:id',UserPut_DeleteValidadtion, UserController.delete)

// //image
app.post('/images', ImageController.create)
app.get('/images', ImageController.list)
app.get('/images/:id', ImageController.listarUma)
app.put('/images/:id', ImageController.update)
app.delete('/images/:id', ImageController.delete)
app.delete('/images', ImageController.deletaUma)

app.listen(3002);
