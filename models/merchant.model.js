const dbConn = require("../config/db.config");

const Merchant = function (merchant) {
    this.name = merchant.name;
    this.password = merchant.quantity;
    this.address = merchant.address;
    this.join_date = merchant.join_date;
    this.phone_number = merchant.phone_number
  };

  Merchant.getListMerchant = (result) => {
    dbConn.query("SELECT * FROM merchant", (err, res) => {
      if (err) {
        console.log("Error while fetching merchant", err);
        result(null, err);
      } else {
        console.log("Merchant fetched successfully");
        result(null, res);
      }
    });
  };

  module.exports = Merchant;