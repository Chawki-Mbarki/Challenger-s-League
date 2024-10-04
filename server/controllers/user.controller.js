const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports.registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  User.create({ username, password: hashedPassword, email })
    .then((newUser) => {
      const token = generateToken(newUser);
      res.status(200).json({ user: newUser, token });
    })
    .catch((error) => res.status(400).json("Error: ", error));
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(async (user) => {
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json("Invalid credentials");
      }
      const token = generateToken(user);
      res.status(200).json({ user, token });
    })
    .catch((error) => res.status(400).json("Error: ", error));
};

module.exports.getUser = async (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json("Error: ", error));
};
