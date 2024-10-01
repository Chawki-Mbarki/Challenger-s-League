const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.registerUser = async (req, res) => {
  const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    User.create({ username, password: hashedPassword, email })
        .then( newProduct => res.status(200).json({ product: newProduct }) )
        .catch( error => res.status(400).json('Error: ',error));
}

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json('Error: ',error);
  }
}
