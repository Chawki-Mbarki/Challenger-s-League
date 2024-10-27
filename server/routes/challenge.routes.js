const challengeController = require("../controllers/challenge.controller");
const authMiddleware = require('../middlewares/auth.middleware');

module.exports = function (app) {
  app.get("/api/challenge", authMiddleware, challengeController.getChallengesAsOpponent);
  app.post("/api/challenge", authMiddleware, challengeController.createChallenge);
  app.get("/api/challenge/active", authMiddleware, challengeController.getActiveChallenge);
  app.get("/api/challenge/:id", authMiddleware, challengeController.getChallenge);
  app.put("/api/challenge/:id", authMiddleware, challengeController.updateChallenge);
  app.delete("/api/challenge/:id", authMiddleware, challengeController.deleteChallenge);
};
