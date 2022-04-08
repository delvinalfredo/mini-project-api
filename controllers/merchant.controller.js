const modelMerchant = require('../models/merchant.model')


exports.getMerchant = (req, res)=> {
    modelMerchant.getListMerchant((err, merchant_service) =>{
        if(err){
            res.send(err);
        } else{
            res.send(merchant_service);
        }  
    })
}