const employeeService = require("../services/employeeServices");

async function addItem(req, res) {
  try {
    const email = req.header("email");
    console.log(email);
    const { name, department, mobileNo } = req.body;
    const newItem = await employeeService.createEmployee({
      name,
      department,
      mobileNo,
      email,
    });
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
async function updateItem(req, res) {
  try {
    console.log(req.body);
    const updatedItem = await employeeService.updateEmployee(req.body);
    res.status(201).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
async function getAllItem(req, res) {
  try {
    const email = req.header("email");
    console.log(email);
    const allItems = await employeeService.getAlllEmployee(email);
    res.status(201).json(allItems);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
async function deleteItem(req, res) {
  try {
    const { id } = req.body;
    console.log("id", id, req.body);
    const item = await employeeService.deleteEmployee(id);
    if (item.error) {
      return res.status(400).json({ message: "Deletion failed" });
    }
    return res.status(201).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

// Add more controller functions as needed

module.exports = {
  addItem,
  getAllItem,
  deleteItem,
  updateItem,
};
