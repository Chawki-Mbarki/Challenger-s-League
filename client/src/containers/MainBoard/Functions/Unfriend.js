const handleUnfriend = async (friendId) => {
  try {
    await unfriend(friendId);
    fetchData();
  } catch (error) {
    console.error("Error unfriending:", error);
  }
};
