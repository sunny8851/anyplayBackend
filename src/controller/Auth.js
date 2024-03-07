// app/controllers/authController.js
const authService = require("../services/Auth");

exports.signup = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, name } = req.body;
    const existingUser = await authService.findUser(email);
    console.log(existingUser);
    if (existingUser.error)
      return res.status(400).json({ message: "User already exists" });
    console.log("object");
    await authService.registerUser(name, email, password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tokenData = await authService.loginUser(email, password);
    console.log("tokenData", tokenData);
    res.status(200).json(tokenData);
  } catch (error) {
    console.error(error);
    const status = error.status || 500;
    res
      .status(status)
      .json({ error: error.message || "Internal server error" });
  }
};
