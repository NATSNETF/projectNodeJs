const express = require('express')
const router = express.Router()
const classController = require('../controller/class')
const authorize= require('./verifyToken')


//router.use(classController.);


router.post('/add',classController.addClass);
router.get('/:id',classController.getClassById) 
router.get('/',authorize.adminAuthorize,classController.getAllClasses) 
router.delete('/:id',authorize.adminAuthorize,classController.deleteByID)
router.post('/request',classController.requestClass);






module.exports = router;