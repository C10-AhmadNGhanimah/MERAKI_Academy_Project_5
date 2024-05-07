const express = require("express");

// Import users controllers
const { Create_Comment } = require("../controllers/ratings");

//middleware
const authentication = require("../middleware/authentication");

const rateRouter = express.Router();

rateRouter.post("/creatComment/:doctor_id",authentication,Create_Comment);

module.exports = rateRouter;