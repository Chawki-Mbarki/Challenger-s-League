const userController = require("../controllers/user.controller");
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = function (app) {
  app.post("/api/register", userController.registerUser);
  app.post("/api/login", userController.loginUser);
  app.get("/api/user", authMiddleware, userController.getUser);
};
