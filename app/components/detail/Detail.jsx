import "./detail.css";

const Detail = () => {
  // Static data
  const user = {
    avatar: "./avatar.png",
    username: "Static User",
  };
  const isCurrentUserBlocked = false;
  const isReceiverBlocked = false;

  // Placeholder functions for actions (no functionality in static version)
  const handleBlock = () => {};
  const handleLogout = () => {};

  return (
    <div className="detail">
      <div className="user">
        <img src={user.avatar} alt="" />
        <h2>{user.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
