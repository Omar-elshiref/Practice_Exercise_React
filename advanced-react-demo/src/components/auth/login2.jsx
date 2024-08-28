import useForm2 from "../hooks/useForm2";

const Login2 = () => {

  const { data, handleChange, resetForm, handleSubmit } = useForm2({userName: "", email: "", password: "", age: "", massege: "" }) 



return (
  <form
  onSubmit={handleSubmit}
  style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <button onClick={resetForm}>Reset Form</button>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      <input
        type= "text"
        name='userName'
        id='userName'
        value={data.userName}
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        id='email'
        value={data.email}
        onChange={handleChange}
      />

      <input
        type='password'
        name='password'
        id='password'
        value={data.password}
        onChange={handleChange}
      />

      <input
        type="number"
        name='age'
        id='age'
        value={data.age}
        onChange={handleChange}
      />

      <textarea type="text"
      name='massege'
      id='massege'
      value={data.massege}
      onChange={handleChange} 
      />

      <button type='submit'>login</button>
    </form>
  );
};

export default Login2;



