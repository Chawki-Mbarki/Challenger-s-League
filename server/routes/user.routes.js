const userController = require("../controllers/user.controller");
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = function (app) {
  app.post("/register", userController.registerUser);
  app.post("/login", userController.loginUser);
  app.get("/user", authMiddleware, userController.getUser);
};
