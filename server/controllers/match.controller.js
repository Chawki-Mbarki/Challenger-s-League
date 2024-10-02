const axios = require('axios');
const Match = require('../models/match.model');

const RIOT_API_URL = 'https://na1.api.riotgames.com/lol/static-data/v3/champions';
const RIOT_API_KEY = process.env.RIOT_API_KEY;

let championCache = {};

async function getChampion(championId) {
  if (championCache[championId]) {
    return championCache[championId];
  }
  const response = await axios.get(`${RIOT_API_URL}/${championId}`, { params: { api_key: RIOT_API_KEY } });
  const champion = response.data;
  championCache[championId] = champion;
  return champion;
}

module.exports.createMatch = async (req, res) => {
  const { player1Id, player2Id, champion1Id, champion2Id, result } = req.body;
  try {
    const match = await Match.create({ player1: player1Id, player2: player2Id, champion1Id, champion2Id, result });
    const [champion1, champion2] = await Promise.all([
      getChampion(champion1Id),
      getChampion(champion2Id)
    ]);
    res.status(200).json({ match, champion1, champion2 });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create match' });
  }
};

