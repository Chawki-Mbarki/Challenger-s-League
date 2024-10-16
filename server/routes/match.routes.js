const matchController = require("../controllers/match.controller");
const authMiddleware = require("../middlewares/auth.middleware");

module.exports = function (app) {
  app.post("/api/match", authMiddleware, matchController.createMatch);
  app.get('/api/match/history', authMiddleware, matchController.getMatchHistory);
};
