const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/mongoose.config");
const userRoutes = require("./routes/user.routes");
const challengeRoutes = require("./routes/challenge.routes");
const matchRoutes = require("./routes/match.routes");
const riotRoutes = require("./routes/riot.routes");

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userRoutes(app);
matchRoutes(app);
challengeRoutes(app);
riotRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
