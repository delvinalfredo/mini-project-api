const modelProduct = require('../models/product.model')


exports.getProduct = (req, res)=> {
    modelProduct.getListProduct((err, merchant_service) =>{
        if(err){
            res.status(400).send(err);
        } else{
            res.status(200).send(merchant_service);
        }  
    })
}

exports.getProductId