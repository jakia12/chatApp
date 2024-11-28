import Image from "next/image";
import avatar from "../../../../public/prof.png";
import "./userInfo.css";

const Userinfo = () => {
  // Static user data
  const currentUser = {
    avatar: avatar,
    username: "Static User",
  };

  return (
    <div className="userInfo">
      <div className="user">
        <Image src={currentUser.avatar} alt="" width={120} height={120} />
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
