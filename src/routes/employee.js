const express = require("express");
const employeeController = require("../controller/employeeController");
const { verifyToken } = require("../middleware/middleware");

const router = express.Router();

router.post("/add", verifyToken, employeeController.addItem);
router.get("/getalllist", verifyToken, employeeController.getAllItem);
router.post("/update", verifyToken, employeeController.updateItem);
router.post("/delete", verifyToken, employeeController.deleteItem);

module.exports = router;
