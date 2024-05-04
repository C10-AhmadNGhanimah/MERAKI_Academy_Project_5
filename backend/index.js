const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");

const app = express();
const PORT = 5000;

// Import Routers
<<<<<<< HEAD
// const userRouter = require("./routes/users");
const clinkRouter=require("./routes/clinic")
const rolesRouter = require("./routes/roles");
=======
const userRouter = require("./routes/users");
const clinkRouter = require("./routes/clinic");
const doctorRouter = require("./routes/doctor.js");
>>>>>>> f080537854e597aaf11b65f1aedfd2f15cfad4ee

app.use(express.json());
app.use(cors());

// Routes Middleware
<<<<<<< HEAD
// app.use("/users",userRouter)
app.use("/clinic",clinkRouter)
app.use("/roles",rolesRouter)

=======
app.use("/users", userRouter);
app.use("/clinic", clinkRouter);
app.use("/doctor", doctorRouter);
>>>>>>> f080537854e597aaf11b65f1aedfd2f15cfad4ee

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
