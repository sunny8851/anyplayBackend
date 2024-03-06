const { default: axios } = require("axios");
const { Item } = require("../models/itemSchema");

function createItem(itemData) {
  //save the item
  const newItem = new Item(itemData);
  return newItem.save();
}
async function getAlllItem() {
  //fetch all items
  const itemList = await Item.find({});
  return itemList;
}
async function updateItem(data) {
  console.log(data);
  //update item
  await Item.updateOne(
    { _id: data.id },
    { $set: { description: data.description, name: data.name } }
  );
  return { msg: "success" };
}

module.exports = {
  createItem,
  getAlllItem,
  updateItem,
};
