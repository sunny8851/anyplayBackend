const express = require("express");
const router = express.Router();
require("../src/db/connection");
const employeeRoutes = require("../src/routes/employee");
const userRoutes = require("../src/routes/userAuthentication");
//item routes
router.use("/employee", employeeRoutes);
router.use("/user", userRoutes);
router.get("/", (req, res) => {
  res.send("Welcome");
});
module.exports = router;
