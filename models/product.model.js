const dbConn = require("../config/db.config");

const Product = function (product) {
    this.name = product.name;
    this.quantity = product.quantity;
    this.price = product.price;
  };

  Product.getListProduct = (result) => {
    dbConn.query("SELECT * FROM product", (err, res) => {
        console.log("Product fetched successfully");
        result(null, res);
    });
  };

  Product.getListProductId = (id, result) => {
    dbConn.query("SELECT * FROM product where id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching product", err);
        result(null, err);
      } else {
        console.log("Product Id fetched successfully");
        result(null, res);
        
      }
    });
  }
  
  Product.createProducts = (id, productsReqData, result) => {
    dbConn.query(
      "UPDATE product SET name=?,quantity=?,price=? WHERE id = ?",
      [productsReqData.name, productsReqData.quantity, productsReqData.price, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating the product");
          result(null, err);
        } else {
          console.log("Products updated successfully");
          result(null, res);
        }
      }
    );
  };

  Product.updateProducts = (id, productReqData, result) => {
    connection.query(
      "UPDATE product SET name=?,quantity=?,price=? WHERE id = ?",
      [
      productReqData.name,
      productReqData.quantity,
      productReqData.price,
        id,
      ],
      (err, res) => {
        if (err) {
          console.log("Error while updating the product");
          result(null, err);
        } else {
          console.log("product updated successfully");
          result(null, res);
        }
      }
    );
  };

  Product.deleteProducts = (id, result)=>{
    connection.query("UPDATE product SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the product');
            result(null, err);
        }else{
            console.log("Product deleted successfully");
            result(null, res);
        }
    });
}



  module.exports = Product;