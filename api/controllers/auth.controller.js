import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).send({ message: "All fields are required" });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    const success = await newUser.save();

    if (success) {
      res.json({ message: "Signup successful" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default signUp;
