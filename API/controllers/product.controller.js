const db = require("../models");
const upload = require('../middleware/uploadMiddleware');
const Product = db.products;
const Op = db.Sequelize.Op;
const path = require('path');
const util = require("util");

// Create and Save a new Product
exports.create = async (req, res) => {
    var hostname = req.headers.host;
    var pathname = req.protocol + "://" + hostname + "/uploads/";
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    let bodyData = req.body;
    //upload file
    const uploadFile = util.promisify(upload.any());
    await uploadFile(req, res);

    // Create a Product
    const product = {
        name: bodyData.name,
        price: bodyData.price,
        image: req.file.filename ? pathname + req.file.filename : ""
    };

    // Save Product in the database
    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    let params = {
        where: condition,
        order: [
            ['id', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
        ],
    };

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);
    params.limit = limit;
    params.offset = offset;
    console.log(params)
    Product.findAndCountAll(params)
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: products } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, products, totalPages, currentPage };
};

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};
