const express = require("express");
const itemController = require("../controller/itemController");

const router = express.Router();

router.post("/englisgtofrench", itemController.translate);
module.exports = router;
