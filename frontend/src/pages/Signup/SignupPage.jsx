import React, { useState } from "react";
// import "./signup.css";
import { useSignup } from "../../hooks/useSignup";
const SignupPage = () => {
  const { signup, loading, error } = useSignup();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(formData);
  };
  return (
    <div className="mainbody">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Type your Email here"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Type your Password here"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-Type your Password here"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button disabled={loading} type="submit">
          Sign Up
        </button>
        {error && <div>Sorry :( {error} </div>}
      </form>
    </div>
  );
};

export default SignupPage;
