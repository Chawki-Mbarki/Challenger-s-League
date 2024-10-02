const userController = require("../controllers/userController");
const authMiddleware = require('../middleware/auth.middleware');

module.exports = function (app) {
  app.post("/register", userController.registerUser);
  app.post("/login", userController.loginUser);
  app.get("/user", authMiddleware, userController.getUser);
};
