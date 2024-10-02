const matchController = require('../controllers/match.controller');
const authMiddleware = require("../middleware/auth.middleware");

module.exports = function (app) {
  app.post('/create', authMiddleware, matchController.createMatch);
  app.get('/history/:userId', authMiddleware, matchController.getMatchHistory);
};
