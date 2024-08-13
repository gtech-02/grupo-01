const express = require('express');
const app = express();

app.use(express.json());

const ProductController = require('./controllers/ProductController');
const ProductCreateValidation = require('./middlewares/ProductMiddleware/ProductCreateValidation');
const CategoryController = require('./controllers/CategoryController');
const UserController = require('./controllers/UserController');


app.post('/products',ProductCreateValidation, ProductController.create)
app.get('/products', ProductController.list)
app.put('/products/:id', ProductController.update)
app.delete('/products/:id', ProductController.delete)
app.get('/v1/category/search', CategoryController)

app.post('/users',UserController.create)

app.listen(5000);
