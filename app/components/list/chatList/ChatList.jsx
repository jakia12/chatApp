import Image from "next/image";
import avatar from "../../../../public/prof.png";
import AddUser from "./addUser/addUser";
import "./chatList.css";

const ChatList = () => {
  // Static data
  const chats = [
    {
      chatId: "1",
      user: {
        username: "JohnDoe",
        avatar: avatar,
        blocked: [],
      },
      lastMessage: "Hey there!",
      isSeen: false,
    },
    {
      chatId: "2",
      user: {
        username: "JaneSmith",
        avatar: avatar,
        blocked: [],
      },
      lastMessage: "What's up?",
      isSeen: true,
    },
  ];
  const addMode = false;
  const input = "";

  // Static filtered chats based on hardcoded input
  const filteredChats = chats;

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="Search" />
          <input
            type="text"
            placeholder="Search"
            disabled // Disabled input in static version
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="Add"
          className="add"
          // Static version: no click event handler
        />
      </div>
      {filteredChats.map((chat) => (
        <div
          className="item"
          key={chat.chatId}
          style={{
            backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
          }}
        >
          <Image
            src={chat.user.avatar}
            alt={chat.user.username}
            width={120}
            height={120}
          />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
