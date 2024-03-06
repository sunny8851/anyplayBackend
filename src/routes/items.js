const express = require("express");
const itemController = require("../controller/itemController");

const router = express.Router();

router.post("/add", itemController.addItem);
router.get("/getallitems", itemController.getAllItem);
router.post("/update", itemController.updateItem);

module.exports = router;
