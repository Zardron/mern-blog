import User from "../models/user.model.js";

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

  const newUser = new User({
    username,
    email,
    password,
  });

  const success = await newUser.save();

  res.json(success);
};

export default signUp;
