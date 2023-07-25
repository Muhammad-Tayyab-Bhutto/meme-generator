import React from "react";

const SignUp = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: true,
  });
  function handleSubmit(event) {
    event.preventDefault();
  }
  console.log(formData)
  const handleChange = () => {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type="email"
        name="email"
        placeholder="name@domain.com"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="***********"
        onChange={handleChange}
        value={formData.password}
      />
      <input
        placeholder="***********"
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
      />
      <div>
        <input
          className="checkbox"
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          value={formData.checkbox}
        />
        <label className="checkbox-lable">
          I want to join the news letter!
        </label>
      </div>
      <button className="submit-btm">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
