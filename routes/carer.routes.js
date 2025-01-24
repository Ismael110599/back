const express = require('express');
const router = express.Router();
const carerController = require('../controllers/carerController')

router.post('/createCarer', carerController.createCarer);
router.post('/carers', carerController.getAllCarers);
router.post('/updateCarer/:id', carerController.updateCarer);
router.post('/deleteCarer/:id', carerController.deleteCarer);
router.post('/getCarers/:id', carerController.getCarer);

module.exports=router;