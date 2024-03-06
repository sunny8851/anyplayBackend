const itemService = require("../services/itemServices");

async function addItem(req, res) {
  try {
    const { name, description } = req.body;
    const newItem = await itemService.createItem({ name, description });
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
async function updateItem(req, res) {
  try {
    console.log(req.body);
    const updatedItem = await itemService.updateItem(req.body);
    res.status(201).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
async function getAllItem(req, res) {
  try {
    const allItems = await itemService.getAlllItem();
    res.status(201).json(allItems);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

// Add more controller functions as needed

module.exports = {
  addItem,
  getAllItem,
  updateItem,
};
