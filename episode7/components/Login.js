import React from "react";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (value) => {
      alert(JSON.stringify(value, null, 2));
    },
  });
  return (
    <div className="login-form">
      <h2>Login-</h2>
      <form className="form" onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit" className="login">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
