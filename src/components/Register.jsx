import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Register({ onRegister }) {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  };

  const navigate = () => useNavigation();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    surname: Yup.string().required("Surname is required"),
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onRegister(values); // Add new user
    resetForm(); // Clear the form
    alert("Registration successful!");
    navigate(/login);
  };

  return (
    <div className="register" style={{ padding: "20px" }}>
      <h2 className="text-center heading">Register</h2>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className='container'
      >
        {() => (
          <Form > 
            <div>
              <label htmlFor="firstName">First Name:</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label htmlFor="surname">Surname:</label>
              <Field type="text" id="surname" name="surname"  />
              <ErrorMessage name="surname" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username"  />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>
            <button type="submit" className="btn btn-outline-secondary">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
