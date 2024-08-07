const express = require('express');
const app = express();

app.use(express.json());

const ProductController = require('./controllers/ProductController');


app.post('/products', ProductController.create);

app.listen(5001);