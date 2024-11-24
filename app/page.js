"use client";

import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
  // Static data
  const currentUser = {
    uid: "12345",
    name: "Static User",
  }; // Hardcoded current user
  const chatId = "67890"; // Static chatId to simulate active chat
  const isLoading = false; // Static loading state

  // Static rendering logic
  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
