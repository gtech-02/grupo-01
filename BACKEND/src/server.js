const express = require('express');
const app = express();

app.use(express.json());

const ProductController = require('./controllers/ProductController');
const ProductCreateValidation = require('./middlewares/ProductMiddleware/ProductCreateValidation');
const CategoryController = require('./controllers/CategoryController');
const ProductUpdateValidation = require('./middlewares/ProductMiddleware/ProductUpdateValidation');


app.post('/products',ProductCreateValidation, ProductController.create)
app.get('/products', ProductController.list)
app.put('/products/:id',ProductUpdateValidation, ProductController.update)
app.delete('/products/:id', ProductController.delete)
app.get('/v1/category/search', CategoryController)


app.listen(3002);
