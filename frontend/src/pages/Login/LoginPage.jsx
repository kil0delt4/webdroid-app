import React, { useState } from "react";
import "./login.css";
import { useLogin } from "../../hooks/useLogin";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, loading, error } = useLogin();
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData);
  };

  return (
    <div className="mainbody">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Type your Email here"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label> Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Type your Password here"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        {error && <div>Sorry :( {error} </div>}
        <p>
          New here ? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
