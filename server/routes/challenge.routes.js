const challengeController = require('../controllers/challenge.controller');
const authMiddleware = require("../middleware/auth.middleware");

module.exports = function (app) {
  app.post('/challenge', authMiddleware, challengeController.createChallenge);
  app.put('/challenge/:id', authMiddleware, challengeController.updateChallenge);
};
