const express = require('express')
const router = express.Router()

const controllerMerchant = require('../controllers/merchant.controller')

router.get('/list', controllerMerchant.getMerchant);

module.exports = router;