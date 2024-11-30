import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../../lib/firebase.js";

import { toast } from "react-toastify";
import "./login.css";

const Login = () => {
  const [loading, setLoading] = useState();

  //store image to the state

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  console.log(imageUrl);

  const imgbbApiKey = "4347e2d5ab2c15d7bee8dac28dcd77c0";

  const handleImageChange = async (e) => {
    setImage(e.target.files[0]); // Set the selected file
    if (!image) {
      toast.warn("Please select an image first.");
      return;
    }

    try {
      // Create FormData and append the image
      const formDataImg = new FormData();
      formDataImg.append("image", image);

      // Upload the image to ImgBB
      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formDataImg
      );

      // Extract and log the image URL
      const uploadedImageUrl = imgRes.data.data.display_url;
      console.log("Uploaded Image URL:", uploadedImageUrl);

      // Save the image URL in state
      setImageUrl(uploadedImageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.warn("Failed to upload image.");
    }
  };

  // const handleImageUpload = async () => {

  // };

  // Static data for avatar
  const avatar = {
    file: null,
    url: "./avatar.png",
  };

  // Placeholder functions (no functionality in static version)
  const handleAvatar = () => {};

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);
    console.log(username, email, password);

    // VALIDATE INPUTS
    if (!username || !email || !password)
      return toast.warn("Please enter inputs!");
    // if (!avatar.file) return toast.warn("Please upload an avatar!");

    // // VALIDATE UNIQUE USERNAME
    // const usersRef = collection(db, "users");
    // const q = query(usersRef, where("username", "==", username));
    // const querySnapshot = await getDocs(q);
    // if (!querySnapshot.empty) {
    //   return toast.warn("Select another username");
    // }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imageUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  //google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google User:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Google login failed!");
    }
  };

  //facebook login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      console.log("Facebook User:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Facebook Login Error:", error);
      alert("Facebook login failed!");
    }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
          <hr />
          <div className="flx">
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
            <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
          </div>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            {imageUrl && (
              <div>
                <p>Uploaded Image:</p>
                <img src={imageUrl} alt="Uploaded" style={{ width: "200px" }} />
              </div>
            )}
            Upload an image
          </label>
          <input type="file" id="file" onChange={handleImageChange} />
          {/* <button onClick={handleImageUpload}>Upload Image</button> */}
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
