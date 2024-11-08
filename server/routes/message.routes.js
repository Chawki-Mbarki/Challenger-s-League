const messageController = require("../controllers/message.controller");
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = function (app) {
  app.post("/api/message/send", authMiddleware, messageController.sendMessage);
  app.get("/api/message/user-messages", authMiddleware, messageController.getUserMessages);
  app.get("/api/message/conversation/:userId", authMiddleware, messageController.getConversation);
};
