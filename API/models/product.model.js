module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    }
  });

  return Product;
};