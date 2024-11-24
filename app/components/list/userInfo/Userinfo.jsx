import "./userInfo.css";

const Userinfo = () => {
  // Static user data
  const currentUser = {
    avatar: "./avatar.png",
    username: "Static User",
  };

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
