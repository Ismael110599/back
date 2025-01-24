const express = require('express');
const router = express.Router();
const qualificationController = require('../controllers/qualificationController')

router.post('/createQualification', qualificationController.createQualification);
router.post('/qualifications', qualificationController.getAllQualifications);
router.post('/updateQualification/:id', qualificationController.updateQualification);
router.post('/deleteQualification/:id', qualificationController.deleteQualification);
router.post('/getQualifications/:id', qualificationController.getQualification);

module.exports=router;