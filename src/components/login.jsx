import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./login.module.css"
export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        const users = await response.json();
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          setError("");
          console.log("Login successful!");
          navigate("/cart");
        } else {
          setError("Invalid username or password.");
        }
      } catch (error) {
        setError("An error occurred while logging in.");
        console.error(error);
      }
    }; 
    return (
      
  
    <div className={classes.container}>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
      Don&apos;t have an account? <a href="/signup">Sign Up</a>
      </p>
    </div> 
      
    );
}