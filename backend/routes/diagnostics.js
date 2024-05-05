const express=require('express')
const routerDignostics=express.Router();

const {createDiginstoics,getAllDiagnosticsWithDoctorNames}=require('../controllers/diagnostics')

routerDignostics.post('/create',createDiginstoics)
routerDignostics.get('/',getAllDiagnosticsWithDoctorNames)
module.exports=routerDignostics