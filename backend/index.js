const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Import Routers
const userRouter = require("./routes/users");
const clinkRouter=require("./routes/clinic")

app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/users",userRouter)
app.use("/clinic",clinkRouter)

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
