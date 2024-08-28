
// >>>>>>>>>>>>>>>>>>>>>>>>>>> Controlled component <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <input
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        type='password'
        name='password'
        id='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button type='submit'>login</button>
    </form>
  );
};

export default Login;
