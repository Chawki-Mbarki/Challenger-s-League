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
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }
  const userEmailExists = await User.findOne({ email });
  const userNameExists = await User.findOne({ username });
  if (userNameExists) {
    return res
      .status(400)
      .json({ success: false, error: "Username is already taken" });
  }
  if (userEmailExists) {
    return res
      .status(400)
      .json({ success: false, error: "Email address has already been used" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    const token = generateToken(newUser);
    res.status(201).json({ success: true, user: newUser, token });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error creating user",
      details: error.message,
    });
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }
    const token = generateToken(user);
    res.status(200).json({ success: true, user, token });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error logging in",
      details: error.message,
    });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching user data",
      details: error.message,
    });
  }
};

module.exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).select("-password -email -friends -blockedUsers");
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching user",
      details: error.message,
    });
  }
};

module.exports.getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("friends", "-password -email -friends -blockedUsers");
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, friends: user.friends });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching friends",
      details: error.message,
    });
  }
};

module.exports.getOtherUsers = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("friends blockedUsers", "_id");
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    const excludedIds = [
      ...user.friends.map((f) => f._id),
      ...user.blockedUsers.map((b) => b._id),
      user._id,
    ];
    const nonFriendsAndNonBlocked = await User.find({
      _id: { $nin: excludedIds },
    }).select("-password -email -friends -blockedUsers");
    res.status(200).json({ success: true, users: nonFriendsAndNonBlocked });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching other users",
      details: error.message,
    });
  }
};


module.exports.addFriend = async (req, res) => {
  const { playerId } = req.params;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    if (user.friends.includes(playerId)) {
      return res
        .status(400)
        .json({ success: false, error: "User is already your friend" });
    }
    user.friends.push(playerId);
    await user.save();

    const player = await User.findById(playerId);
    if (!player) {
      return res
        .status(404)
        .json({ success: false, error: "Player not found" });
    }
    player.friends.push(user._id);
    await player.save();

    res
      .status(200)
      .json({ success: true, message: "Friend added successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error adding friend",
      details: error.message,
    });
  }
};

module.exports.unfriend = async (req, res) => {
  const { friendId } = req.params;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    if (!user.friends.includes(friendId)) {
      return res
        .status(400)
        .json({ success: false, error: "User is not your friend" });
    }

    user.friends = user.friends.filter((id) => id.toString() !== friendId);
    await user.save();

    const friend = await User.findById(friendId);
    if (!friend) {
      return res
        .status(404)
        .json({ success: false, error: "Friend not found" });
    }

    friend.friends = friend.friends.filter(
      (id) => id.toString() !== user._id.toString()
    );
    await friend.save();

    res
      .status(200)
      .json({ success: true, message: "Friend removed successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error removing friend",
      details: error.message,
    });
  }
};

module.exports.blockUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    if (user.blockedUsers.includes(userId)) {
      return res.status(400).json({ success: false, error: "User is already blocked" });
    }

    user.blockedUsers.push(userId);
    await user.save();

    res.status(200).json({ success: true, message: "User blocked successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error blocking user",
      details: error.message,
    });
  }
};
