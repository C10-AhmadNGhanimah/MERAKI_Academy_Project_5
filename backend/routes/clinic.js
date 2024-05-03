const express=require('express')
const clinkRouter=express.Router();
const {createClinic}=require('../controllers/clinic')

clinkRouter.post('/create',createClinic)

module.exports=clinkRouter

