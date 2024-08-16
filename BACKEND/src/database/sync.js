const ProductAll = require("../models/ProductAll");
const connection = require("./connection");
const UserName = require("../models/UserName");
const CategoriaModel = require("../models/CategoriaModel")
const ProductImage = require("../models/ProductImage")

connection.sync({create: true})
