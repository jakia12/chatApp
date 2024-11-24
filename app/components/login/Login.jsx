import "./login.css";

const Login = () => {
  // Static data for avatar
  const avatar = {
    file: null,
    url: "./avatar.png",
  };

  // Placeholder functions (no functionality in static version)
  const handleAvatar = () => {};
  const handleRegister = (e) => {
    e.preventDefault();
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" disabled />
          <input
            type="password"
            placeholder="Password"
            name="password"
            disabled
          />
          <button disabled>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
            disabled
          />
          <input type="text" placeholder="Username" name="username" disabled />
          <input type="text" placeholder="Email" name="email" disabled />
          <input
            type="password"
            placeholder="Password"
            name="password"
            disabled
          />
          <button disabled>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
