const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware');

module.exports = function (app) {
  app.post("/api/register", userController.registerUser);
  app.post("/api/login", userController.loginUser);
};
