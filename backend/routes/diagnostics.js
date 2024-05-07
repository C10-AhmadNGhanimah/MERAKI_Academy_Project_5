const express=require('express')
const routerDignostics=express.Router();

const {createDiginstoics,getAllUserDiagnostics}=require('../controllers/diagnostics')
const authentication=require('../middleware/authentication')

routerDignostics.post('/create',authentication,createDiginstoics)
routerDignostics.get('/',authentication,getAllUserDiagnostics)
module.exports=routerDignostics