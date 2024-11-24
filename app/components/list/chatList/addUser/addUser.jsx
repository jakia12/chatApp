import "./addUser.css";

const AddUser = () => {
  // Static user data
  const user = {
    avatar: "./avatar.png",
    username: "Static User",
  };

  // Placeholder functions (no functionality in static version)
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleAdd = () => {};

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" disabled />
        <button disabled>Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar} alt="" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd} disabled>
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
