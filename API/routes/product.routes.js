module.exports = app => {
    const products = require("../controllers/product.controller.js");
    const upload = require('../middleware/uploadMiddleware');
    var router = require("express").Router();

    // Create a new Product
    router.post('/', upload.single('image'), products.create);

    // Retrieve all Products
    router.get("/", products.findAll);
    
    app.use('/api/products', router);
};