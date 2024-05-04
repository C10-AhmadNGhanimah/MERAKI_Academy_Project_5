const express=require('express')
const clinkRouter=express.Router();
const {createClinic,getAllClinic,getClinicById,getDoctorsBySpecialization}=require('../controllers/clinic')

clinkRouter.post('/create',createClinic)
clinkRouter.get('/',getAllClinic)
clinkRouter.get('/:id',getClinicById)
clinkRouter.get('/doctors/:specialization',getDoctorsBySpecialization)

module.exports=clinkRouter

