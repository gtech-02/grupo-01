const ProductAll = require("../models/ProductAll");
const connection = require("./connection");
const UserName = require("../models/UserName");

connection.sync({create: true})