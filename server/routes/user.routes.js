const userController = require("../controllers/user.controller");
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = function (app) {
  app.get("/api/user", authMiddleware, userController.getUser);
  app.post("/api/user/register", userController.registerUser);
  app.post("/api/user/login", userController.loginUser);
  app.get("/api/user/otherPlayers", authMiddleware, userController.getOtherUsers);
  app.get("/api/user/friends", authMiddleware, userController.getFriends);
  app.get("/api/user/:userId", authMiddleware, userController.getUserById);
  app.post("/api/user/:playerId/add-friend", authMiddleware, userController.addFriend);
  app.delete("/api/user/:friendId/unfriend", authMiddleware, userController.unfriend);
  app.post("/api/user/:userId/block", authMiddleware, userController.blockUser);
};
