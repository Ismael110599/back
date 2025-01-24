const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController')

router.post('/createApplication', applicationController.createApplication);
router.post('/applications', applicationController.getAllApplications);
router.post('/updateApplication/:id', applicationController.updateApplication);
router.post('/deleteApplication/:id', applicationController.deleteApplication);
router.post('/getApplications/:id', applicationController.getApplication);

module.exports=router;