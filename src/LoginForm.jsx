import React, { useState } from "react";
import axios from "axios";

// Your deployed Render backend URL
const API_URL = "https://register-0bzz.onrender.com";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // *** THIS LINE IS UPDATED ***
      await axios.post(`${API_URL}/submit`, formData);
      alert("Details submitted successfully to database!");
    } catch (err) {
      // Log error for debugging, but show friendly message to user
      console.error("API Error:", err);
      alert("Failed to submit data! Check your server logs or network.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login Form</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
      /><br/><br/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
      /><br/><br/>
      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        required
        onChange={handleChange}
      /><br/><br/>
      <button type="submit">Submit</button>
    </form>
  );
};

const styles = {
  form: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default LoginForm;