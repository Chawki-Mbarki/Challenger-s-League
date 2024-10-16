const axios = require("axios");

const getLatestVersion = async () => {
  const response = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json");
  return response.data[0];
};

module.exports = function (app) {
  app.get("/api/champions", async (req, res) => {
    try {
      const version = await getLatestVersion();
      const championsResponse = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
      const champions = Object.values(championsResponse.data.data);
      res.json({ champions: champions, version: version });
    } catch (error) {
      console.error("Error fetching champions:", error);
      res.status(500).send("Error fetching champions");
    }
  });

  app.get("/api/champions/:championName", async (req, res) => {
    const { championName } = req.params;
    try {
      const version = await getLatestVersion();
      const championsResponse = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
      const champions = championsResponse.data.data;
      const champion = champions[championName];
      if (champion) {
        res.json({ champion: champion, version: version });
      } else {
        res.status(404).send("Champion not found");
      }
    } catch (error) {
      console.error("Error fetching champion:", error);
      res.status(500).send("Error fetching champion");
    }
  });
};
