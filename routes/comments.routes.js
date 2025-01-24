const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController')

router.post('/createComments', commentsController.createComments);
router.post('/comments', commentsController.gayAllCommentss);
router.post('/updateComments/:id', commentsController.updateComments);
router.post('/delayeComments/:id', commentsController.delayComments);
router.post('/getCommentss/:id', commentsController.gayComments);

module.exports=router;