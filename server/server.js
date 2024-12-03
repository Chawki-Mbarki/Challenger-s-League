const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
require("dotenv").config();

require("./config/mongoose.config");
const userRoutes = require("./routes/user.routes");
const challengeRoutes = require("./routes/challenge.routes");
const messageRoutes = require("./routes/message.routes");
const matchRoutes = require("./routes/match.routes");
const riotRoutes = require("./routes/riot.routes");

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userRoutes(app);
matchRoutes(app);
messageRoutes(app);
challengeRoutes(app);
riotRoutes(app);

const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

module.exports = { io };
