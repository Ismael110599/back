const express = require('express');
const router = express.Router();
const payController = require('../controllers/payController')

router.post('/createPay', payController.createPay);
router.post('/pays', payController.gayAllPays);
router.post('/updatePay/:id', payController.updatePay);
router.post('/delayePay/:id', payController.delayPay);
router.post('/getPays/:id', payController.gayPay);

module.exports=router;