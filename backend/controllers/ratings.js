const { pool } = require("../models/db");

// Create New Comment Function
const Create_Comment =  (req, res) => {
  const doctor_id = req.params.id;
  const user_id = req.token.userId;
  
  const { comment, rating} = req.body;
  const query = `INSERT INTO ratings (comment,rating,doctor_id,user_id) VALUES ($1,$2,$3,$4) RETURNING *`;
  const value = [comment, rating, doctor_id,user_id];
  pool
    .query(query, value)
    .then((result) => {
      console.log("from res",result.rows);
      res.status(201).json({
        success: true,
        massage: "Comment Created Successfully",
        result: result.rows[0]
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Server Error",
        err : err
      });
    });
};

module.exports = {
  Create_Comment,
};
