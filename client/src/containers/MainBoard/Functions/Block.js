const handleBlock = async (userId) => {
  try {
    await blockUser(userId);
    fetchData();
  } catch (error) {
    console.error("Error blocking user:", error);
  }
};
