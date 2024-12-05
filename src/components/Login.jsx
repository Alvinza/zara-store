import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login({ users, onLogin }) {
  const initialValues = { username: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const user = users.find(
      (u) => u.username === values.username && u.password === values.password
    );
    if (user) {
      onLogin(user); // Log in the user
      resetForm();
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="formSection" style={{ padding: "20px" }}>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className='container'
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" placeholder='Enter your username' name="username" style={{width: "400px", border: 'none', borderRadius: '4px', padding: '10px'}} />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" placeholder='Enter your password' style={{width: "400px", border: 'none', borderRadius: '4px', padding: '10px'}} />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>
            <p>Don't have account ? <a href="/register" style={{textDecoration: 'none'}}>Sign up</a></p>
            <button className="btn btn-outline-secondary" type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
