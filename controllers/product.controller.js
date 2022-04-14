const modelProduct = require('../models/product.model')


exports.getProduct = (req, res)=> {
    modelProduct.getListProduct((err, merchant_service) =>{
        res.status(200).send(merchant_service);
    })
}

exports.getProductId = (req,res) =>{
    // console.log('get product id');
    modelProduct.getListProductId(req.params.id, (err, merchant_service) =>{
        if(err){
            res.status(401).send({ message: 'Id is not exist!'});
        } else{
            res.status(200).send(merchant_service);
        }  
    })
}

exports.createNewProducts = (req, res) =>{
    const productsReqData = new modelStores(req.body);
    console.log('productsReqData', productsReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        modelStores.createProducts(productsReqData, (err, store)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Products Created Successfully', data: store.insertId})
        })
    }
}