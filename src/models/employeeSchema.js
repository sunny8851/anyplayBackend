const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  mobileNo: { type: String, required: true },
});
const Employee = mongoose.model("employee", employeeSchema);
module.exports = { Employee };
