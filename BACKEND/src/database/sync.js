const ProductAll = require("../models/ProductAll");
const connection = require("./connection");

connection.sync({create: true})