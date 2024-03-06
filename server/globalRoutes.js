const express = require("express");
const router = express.Router();
require("../src/db/connection");
const itemRoutes = require("../src/routes/items");
const translateRoutes = require("../src/routes/translate");
//item routes
router.use("/item", itemRoutes);
router.get("/", (req, res) => {
  res.send("Welcome");
});
module.exports = router;
