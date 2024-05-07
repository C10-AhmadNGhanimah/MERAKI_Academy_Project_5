const express = require("express");

// Import users controllers
const {createComment } = require("../controllers/ratings");

//middleware
const authentication = require("../middleware/authentication");

const rateRouter = express.Router();

rateRouter.post("/creatComment/:doctor_id",authentication,createComment);

module.exports = rateRouter;