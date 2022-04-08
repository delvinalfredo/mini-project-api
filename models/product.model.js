const dbConn = require("../config/db.config");

const Product = function (product) {
    this.name = product.name;
    this.quantity = product.quantity;
    this.price = product.price;
  };

  Product.getListProduct = (result) => {
    dbConn.query("SELECT * FROM product", (err, res) => {
      if (err) {
        console.log("Error while fetching product", err);
        result(null, err);
      } else {
        console.log("Product fetched successfully");
        result(null, res);
      }
    });
  };

  Product.getListProductId = (id, result) => {
    dbConn.query("SELECT * FROM product where id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching product", err);
        result(null, err);
      } else {
        console.log("Product fetched successfully");
        result(null, res);
      }
    });
  }
  

  module.exports = Product;