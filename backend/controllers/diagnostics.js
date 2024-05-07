const {pool}=require('../models/db')


const createDiginstoics = (req, res) => {
    const user_id = req.token.userId;
    console.log(user_id)
    const doctor_id = req.token.doctorId;

    const { diagnostics, image_diagnostics } = req.body;

    const query = `INSERT INTO diagnostics (diagnostics, image_diagnostics, user_id, doctor_id) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [diagnostics, image_diagnostics, user_id, doctor_id];

    pool.query(query, values)
        .then((result) => {
            res.status(201).json({ message: "created diagnostics" });
        })
        .catch((err) => {
            res.status(500).send("an error occurred while adding the clinic");
        });
};
const getAllUserDiagnostics = (req, res) => {
    const userId = req.token.userId;
    console.log(req)
    
    const query = `
        SELECT diagnostics.*, doctors.full_name AS doctor_name
        FROM diagnostics
        JOIN doctors ON diagnostics.doctor_id = doctors.id
        WHERE diagnostics.user_id = $1;`;
        
    pool.query(query, [userId])
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((err) => {
            console.error('Error retrieving diagnostics:', err);
            res.status(500).send("An error occurred while retrieving diagnostics");
        });
};


module.exports={
    createDiginstoics,
    getAllUserDiagnostics
}