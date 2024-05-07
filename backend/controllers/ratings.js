const { pool } = require("../models/db");

// Create New Comment Function
const createComment = (req, res) => {
  const doctor_id = req.params.id;
  console.log(req.params);
  const user_id = req.token.userId;

  const { comment, rating } = req.body;
  const query = `INSERT INTO ratings (comment,rating,rating_date,doctor_id,user_id) VALUES ($1,$2,CURRENT_TIMESTAMP,$3,$4) RETURNING *`;
  const value = [comment, rating, doctor_id, user_id];
  pool
    .query(query, value)
    .then((result) => {
      console.log("from res", result.rows);
      res.status(201).json({
        success: true,
        massage: "Comment Created Successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    });
};

const getAllRatingByClinicId = (req, res) => {
  const clinicId = req.params.id;

  const query = `SELECT ratings.id, ratings.rating, ratings.comment, ratings.rating_date, ratings.user_id, ratings.doctor_id
  FROM ratings
  INNER JOIN doctors ON ratings.doctor_id = doctors.id
  INNER JOIN clinics ON doctors.specialization_doctor = clinics.specialization
  WHERE clinics.id = $1;`;

  const data = [clinicId];
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All comments for clinic: ${clinicId}`,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};

const createRatingByUserIdForClinic = (req, res) => {
  const { clinicId, userId } = req.params;
  const {rating, comment} = req.body;

  const query = `
    INSERT INTO ratings (rating, comment, rating_date, user_id)
    VALUES ($1, $2, CURRENT_TIMESTAMP, $3)
    RETURNING *;
  `;
  const value = [ rating, comment,clinicId]

  pool.query(query,value)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Rating created successfully for clinic ${clinicId}`,
        result: result.rows[0],
      });
    })
    .catch((err) => {
      console.error("Error creating rating:", err);
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};


module.exports = {
  createComment,
  getAllRatingByClinicId,
  createRatingByUserIdForClinic
};
