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
    const productsReqData = new modelProducts(req.body);
    console.log('productsReqData', productsReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        modelProduct.createProducts(productsReqData, (err, merchant_service)=>{
            if(err)
            res.send(err);
            res.status(200).json({status: true, message: 'Products Created Successfully', data: merchant_service.insertId})
        })
    }
}

exports.updateProducts = (req, res)=>{
    const productsReqData = new modelProducts(req.body);
    console.log('productsReqData update', productsReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        modelProduct.updateProducts(req.params.id, productsReqData, (err, merchant_service)=>{
            if(err)
            res.send(err);
            res.status(200).json({status: true, message: 'Product updated Successfully'})
        })
    }
}

exports.deleteProducts = (req, res)=>{
    modelProduct.deleteProducts(req.params.id, (err, merchant_service)=>{
        if(err)
        res.send(err);
        res.status(200).json({success:true, message: 'Product deleted successully!'});
    })
}