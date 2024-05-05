const modalClinic = require("../routes/clinic");
const { pool } = require("../models/db");

const createClinic = (req, res) => {
<<<<<<< HEAD
  const { name, specialization, location, doctor_id } = req.body;
  const query = `INSERT INTO clinics (name, specialization, location, doctor_id) VALUES ($1,$2,$3,$4) RETURNING *`;
  const values = [name, specialization, location, doctor_id];
=======
  const { name, location, image_clinic, description, specialization } =
    req.body;
  const query = `INSERT INTO clinics (name, location, image_clinic, description , specialization) VALUES ($1,$2,$3,$4 ,$5) RETURNING *`;
  const values = [name, location, image_clinic, description, specialization];
>>>>>>> 1b9698b05ac9d4a80dc4adbda39968d695b5322e
  pool
    .query(query, values)
    .then((result) => {
      res.status(201).json({ message: "created clinic" });
    })
    .catch((err) => {
      res.status(500).send("an error occurred while adding the clinic");
    });
};

const getAllClinic = (req, res) => {
  pool
    .query(`SELECT * FROM clinics `)
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
    .query("SELECT * FROM clinics WHERE id = $1", [clinicId])
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

const getDoctorsBySpecialization = (req, res) => {
  const specializationId = req.params.id;
  console.log(specializationId);

  pool
<<<<<<< HEAD
    .query("SELECT * FROM clinics WHERE specialization = $1", [specialization])
=======
    .query(
      `
      SELECT c.*, s.name_specialization 
      FROM clinics c 
      INNER JOIN specialization s ON c.specialization = s.id 
      WHERE c.specialization = $1
    `,
      [specializationId]
    )
>>>>>>> 1b9698b05ac9d4a80dc4adbda39968d695b5322e
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).send("No clinics found for this specialization");
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch((error) => {
      console.error("Error fetching clinics:", error);
      res.status(500).send("An error occurred while fetching clinics data");
    });
};
module.exports = {
  createClinic,
  getAllClinic,
  getClinicById,
  getDoctorsBySpecialization,
};
