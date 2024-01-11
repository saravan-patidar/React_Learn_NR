import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be 6 characters")
    .required("Required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (value) => {
      console.log(JSON.stringify(value, null, 2));
    },
  });

  return (
    ({ values, handleChange, handleBlur, handleSubmit, touched, errors } =
      formik),
    (
      <div className="login-form">
        <h2>Login-</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="login">
            Login
          </button>
        </form>
      </div>
    )
  );
};
export default Login;
