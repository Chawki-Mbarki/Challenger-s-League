const Message = require("../models/message.model");
const User = require("../models/user.model");
const { io } = require("../server");

module.exports.sendMessage = async (req, res) => {
  const { receiverId, content } = req.body;
  try {
    const senderUser = await User.findById(req.user.id);
    const receiverUser = await User.findById(receiverId);

    if (!receiverUser) {
      return res.status(404).json({ success: false, error: "Receiver not found" });
    }

    const newMessage = await Message.create({
      sender: senderUser._id,
      receiver: receiverUser._id,
      content,
    });

    res.status(201).json({ success: true, message: newMessage });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error sending message",
      details: error.message,
    });
  }
};

module.exports.getUserMessages = async (req, res) => {
  try {
    const userMessages = await Message.find({
      $or: [
        { sender: req.user.id },
        { receiver: req.user.id },
      ],
    })
      .populate("sender", "username")
      .populate("receiver", "username")
      .sort({ timestamp: -1 });

    res.status(200).json({ success: true, messages: userMessages });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching messages",
      details: error.message,
    });
  }
};

module.exports.getConversation = async (req, res) => {
  const { userId: otherUserId } = req.params;
  try {
    const conversationMessages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: otherUserId },
        { sender: otherUserId, receiver: req.user.id },
      ],
    })
      .populate("sender", "username")
      .populate("receiver", "username")
      .sort({ timestamp: 1 });

    res.status(200).json({ success: true, conversation: conversationMessages });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching conversation",
      details: error.message,
    });
  }
};
