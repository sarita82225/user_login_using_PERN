import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label><br />
      <input 
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <label>Password:</label><br />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button type="submit">Login</button>

      <p>{message}</p>
    </form>
  );
}

export default Login;
