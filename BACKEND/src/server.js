const express = require('express');
const app = express();

app.use(express.json());

const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');



app.post('/products', ProductController.create);
app.get('/v1/category/search', CategoryController,)


app.listen(5001);