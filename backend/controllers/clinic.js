const modalClinic = require("../routes/clinic");
const { pool } = require("../models/db");

const createClinic = (req, res) => {
  const { name, specialization, location, doctor_id } = req.body;
  const query = `INSERT INTO clinic (name, specialization, location, doctor_id) VALUES ($1,$2,$3,$4) RETURNING *`;
  const values = [name, specialization, location, doctor_id];
  pool
    .query(query.values)
    .then((result) => {
      res.status(201).json(result.rows[0]);
    })
    .catch((err) => {
      res.status(500).send("'An error occurred while adding the clinic");
    });
};

const getAllClinic = (req, res) => {
  pool
    .query(`SELECT * FROM clinic `)
    .then((result) => {
      res.status(201).json(result.rows);
    })
    .catch((err) => {
      res.status(500).send("An error occurred while fetching clinics");
    });
};

const getClinicById = (req, res) => {
  const clinicId = req.params.id;
  pool
    .query("SELECT * FROM clinic WHERE id = $1", [clinicId])
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).send("The clinic does not exist");
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch((error) => {
      res.status(500).send("An error occurred while fetching clinic data");
    });
};

module.exports = {
  createClinic,
  getAllClinic,
  getClinicById,
};
