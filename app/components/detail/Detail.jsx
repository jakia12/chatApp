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
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            {[...Array(4)].map((_, index) => (
              <div className="photoItem" key={index}>
                <div className="photoDetail">
                  <img
                    src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""
                  />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
            ))}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
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
