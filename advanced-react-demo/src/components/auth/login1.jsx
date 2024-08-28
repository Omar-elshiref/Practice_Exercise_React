import { useState } from "react";

const Login1 = () => {
const [formData, setFormData] = useState({
  email: "",
  password: "",
})

 const handleChange = (e) => {
  const [name, value] = e.target;
  setFormData(prevState => ({ ...prevState, [name]: value }));
  
}

const handleSubmit = (e) => {
  e.preventDefault();
};


return (
  <form
  onSubmit={handleSubmit}
  style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <input
        type='email'
        name='email'
        id='email'
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type='password'
        name='password'
        id='password'
        value={formData.password}
        onChange={handleChange}
      />

      <button type='submit'>login</button>
    </form>
  );
};

export default Login1;
