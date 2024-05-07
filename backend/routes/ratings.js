const express = require("express");

// Import users controllers
const {createComment,getAllRatingByClinicId,createRatingByUserIdForClinic} = require("../controllers/ratings");

//middleware
const authentication = require("../middleware/authentication");

const rateRouter = express.Router();

rateRouter.post("/creatComment/:doctor_id",authentication,createComment);
rateRouter.get("/:clinicId",getAllRatingByClinicId);
rateRouter.post("/:userId/:clinicId",createRatingByUserIdForClinic);



module.exports = rateRouter;