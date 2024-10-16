const AddFriend = async (playerId) => {
  try {
    await addFriend(playerId);
    fetchData();
  } catch (error) {
    console.error("Error adding friend:", error);
  }
};
