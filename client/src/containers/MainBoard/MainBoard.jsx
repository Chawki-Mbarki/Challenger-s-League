import React, { useEffect, useState } from "react";
import {
  getOtherUsers,
  getFriends,
  addFriend,
  unFriend,
  blockUser,
  getUserById,
} from "../../api/userApi";
import {
  getChallengesAsOpponent,
  updateChallenge,
  getActiveChallenge,
} from "../../api/challengeApi";
import {
  getConversation
} from "../../api/messageApi";
import {
  PlayersList,
  FriendsList,
  ChallengesList,
  ChallengeWidget,
  MessagingWidget,
} from "../../containers";
import Styles from "./MainBoard.module.css";
import { Flag, Waiting } from "../../components";

const MainBoard = ({ user }) => {
  const [players, setPlayers] = useState(null);
  const [friends, setFriends] = useState(null);
  const [friend, setFriend] = useState(null);
  const [messages, setMessages] = useState(null);
  const [challenges, setChallenges] = useState(null);
  const [error, setError] = useState("");
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [messaginWidgetVisible, setMessaginWidgetVisible] = useState(false);
  const [challengeDetails, setChallengeDetails] = useState(null);
  const [currentState, setCurrentState] = useState("start");
  const [myRole, setMyRole] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([fetchPlayers(), fetchFriends(), fetchChallenges()]);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load data.");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const loadActiveChallenge = async () => {
      try {
        await fetchActiveChallenge(user);
      } catch (err) {
        console.error("Couldn't Fetch Active Champions");
      }
    };
    if (user) {
      loadActiveChallenge();
    }
  }, [user]);

  const setMyRoleAs = async (challenger, user) => {
    if (user.username === challenger.username) {
      setMyRole("challenger");
    } else {
      setMyRole("opponent");
    }
  };

  const fetchPlayers = async () => {
    try {
      const response = await getOtherUsers();
      setPlayers(response.success ? response.users : null);
    } catch (err) {
      setPlayers(null);
    }
  };

  const fetchFriends = async () => {
    try {
      const response = await getFriends();
      setFriends(response.success ? response.friends : null);
    } catch (err) {
      setFriends(null);
    }
  };

  const fetchChallenges = async () => {
    try {
      const response = await getChallengesAsOpponent();
      setChallenges(response?.challenges || null);
    } catch (err) {
      setChallenges(null);
      setError(err.response?.data?.error || "Failed to load challenges.");
    }
  };

  const fetchActiveChallenge = async (user) => {
    try {
      const response = await getActiveChallenge();
      if (response?.activeChallenge !== null) {
        const activeChallenge = response?.activeChallenge;
        setChallengeDetails({ ...activeChallenge });
        setCurrentState(activeChallenge.state);
        setMyRoleAs(activeChallenge.challenger, user);
        setWidgetVisible(true);
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Failed to load active challenges."
      );
    }
  };

  const handleAddFriend = async (playerId) => {
    try {
      await addFriend(playerId);
      await fetchPlayers();
      await fetchFriends();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add friend.");
    }
  };

  const handleUnfriend = async (friendId) => {
    try {
      await unFriend(friendId);
      await fetchFriends();
      await fetchPlayers();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to unfriend.");
    }
  };

  const handleBlock = async (userId) => {
    try {
      await blockUser(userId);
      await fetchPlayers();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to block user.");
    }
  };

  const handleChallenge = (opponent) => {
    const newChallenge = {
      challenger: user,
      opponent: opponent,
      gameMode: null,
      status: "pending",
    };
    setChallengeDetails(newChallenge);
    setMyRole("challenger");
    setWidgetVisible(true);
  };

  const handleConversation = (user) => {
    console.log(user)
    setFriend(user)
    setMessages(getConversation(user))
    setMessaginWidgetVisible(true);
  };

  const toggleMessagingWidgetVisibility = () => {
    setMessaginWidgetVisible(!messaginWidgetVisible);
  };

  const toggleWidgetVisibility = () => {
    setWidgetVisible(!widgetVisible);
  };

  const handleChallengeResponse = async (challenge, status) => {
    try {
      const updatedChallengeData = {
        status: status,
        state: challenge.gameMode,
      };
      await updateChallenge(challenge._id, updatedChallengeData);
      await fetchChallenges();
      if (status === "accepted") {
        setCurrentState(challenge.gameMode);
        setChallengeDetails({ ...challenge });
        setMyRole("opponent");
        setWidgetVisible(true);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update challenge.");
    }
  };

  const onAccept = async (challenge) => {
    await handleChallengeResponse(challenge, "accepted");
  };

  const onRefuse = async (challenge) => {
    await handleChallengeResponse(challenge, "declined");
  };

  return (
    <div className={`${Styles.MainBoard} container`}>
      {error ? (
        <div style={{ marginTop: "25px" }}>
          <Flag type={"error"} text={error} />
        </div>
      ) : (
        <>
          <PlayersList
            players={players}
            onChallenge={handleChallenge}
            onAddFriend={handleAddFriend}
            onBlock={handleBlock}
          />
          <FriendsList
            friends={friends}
            onChallenge={handleChallenge}
            onUnfriend={handleUnfriend}
            onMessage={handleConversation}
          />
          <ChallengesList
            challenges={challenges}
            onAccept={onAccept}
            onRefuse={onRefuse}
          />
          {players && friends && challenges && widgetVisible && (
            <ChallengeWidget
              importedChallenge={challengeDetails}
              setChallengeDetails={setChallengeDetails}
              onClose={toggleWidgetVisibility}
              currentState={currentState}
              setCurrentState={setCurrentState}
              myRole={myRole}
            />
          )}
          {friend && messaginWidgetVisible && (
            <MessagingWidget
              onClose={toggleMessagingWidgetVisibility}
              friend={friend}
              messages={messages}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MainBoard;
