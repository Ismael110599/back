const express = require('express');
const router = express.Router();
const voucherController = require('../controllers/voucherController')

router.post('/createVoucher', voucherController.createVoucher);
router.post('/vouchers', voucherController.getAllVouchers);
router.post('/updateVoucher/:id', voucherController.updateVoucher);
router.post('/deletevoucher/:id', voucherController.deleteVoucher);
router.post('/getVoucher/:id', voucherController.getVoucher);

module.exports=router;