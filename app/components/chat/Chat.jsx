import "./chat.css";

const Chat = () => {
  // Static data
  const user = {
    avatar: "./avatar.png",
    username: "Static User",
  };
  const messages = [
    {
      senderId: "123",
      text: "Hello, how are you?",
      createdAt: new Date(),
    },
    {
      senderId: "456",
      text: "I'm doing well, thank you!",
      createdAt: new Date(),
    },
  ];
  const currentUser = {
    id: "123",
  };
  const img = {
    file: null,
    url: "",
  };
  const isCurrentUserBlocked = false;
  const isReceiverBlocked = false;

  // Placeholder for actions (no functionality in static version)
  const handleImg = () => {};
  const handleSend = () => {};
  const handleEmoji = () => {};

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {messages.map((message, index) => (
          <div
            className={
              message.senderId === currentUser.id ? "message own" : "message"
            }
            key={index}
          >
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              <span>{message.createdAt.toLocaleString()}</span>
            </div>
          </div>
        ))}
        {img.url && (
          <div className="message own">
            <div className="texts">
              <img src={img.url} alt="" />
            </div>
          </div>
        )}
        <div></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You cannot send a message"
              : "Type a message..."
          }
          value=""
          onChange={() => {}}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => {}} />
          <div className="picker">
            {/* Static version has no emoji picker */}
          </div>
        </div>
        <button
          className="sendButton"
          onClick={handleSend}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
