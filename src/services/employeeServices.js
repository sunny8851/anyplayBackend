const { default: axios } = require("axios");
const { Employee } = require("../models/employeeSchema");

async function createEmployee(itemData) {
  //save the item
  try {
    const newEmployee = new Employee(itemData);
    return newEmployee.save();
  } catch (err) {
    console.log(err);
    return { error: true };
  }
}
async function getAlllEmployee(email) {
  try {
    const itemList = await Employee.find({ email: email });
    return itemList;
  } catch (err) {
    console.log(err);
    return { error: true };
  }
}
async function updateEmployee(data) {
  try {
    await Employee.updateOne(
      { _id: data.id },
      {
        $set: {
          department: data.department,
          mobileNo: data.mobileNo,
          name: data.name,
        },
      }
    );
    return { msg: "success" };
  } catch (err) {
    console.log(err);
    return { error: true };
  }
}
async function deleteEmployee(data) {
  try {
    const result = await Employee.deleteOne({ _id: data });
    if (result.deletedCount === 1) {
      return { error: false };
    } else {
      return { error: true };
    }
  } catch (error) {
    console.error("Error during delete operation:", error);
    return { error: true };
  }
}

module.exports = {
  createEmployee,
  getAlllEmployee,
  deleteEmployee,
  updateEmployee,
};
