require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const merchant = require('./routes/product.route')

app.get('/', (req, res)=>{
  res.send("Hello world!")
})

app.use('/merchant', merchant);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
