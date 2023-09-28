import { useState } from 'react';
import classes from "./signUp.module.css"
export default function SignUp() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('https://fakestoreapi.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('New user added:', data);
          })
          .catch((error) => {
            console.error('Error adding new user:', error);
          });
      };
    
    return (
        <div className={classes.container}>
      <h2>Signup Form</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
        
    )
}