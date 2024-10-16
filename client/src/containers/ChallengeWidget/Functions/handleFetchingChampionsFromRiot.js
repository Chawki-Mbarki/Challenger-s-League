import { fetchChampionsFromRiot } from '../../../api/riotApi';

const handleFetchingChampionsFromRiot = async (setChampions, setVersion, setError) => {
  try {
    const fetchedChampions = await fetchChampionsFromRiot();
    setChampions(fetchedChampions.champions);
    setVersion(fetchedChampions.version);
  } catch (err) {
    console.error("Error Fetching Champions:", err);
    setError(err.response?.data?.error || "Failed to fetch champions from Riot Games");
  }
};

export default handleFetchingChampionsFromRiot;