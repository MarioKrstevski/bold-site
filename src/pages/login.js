import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LoginPage = () => (
  <>
    <SEO title="Login Page" />
    
    <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          navigate("/")
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <Link to="/app"> Move </Link>
        </Form>
      )}
    </Formik>
  </div>

    <Link to="/">Go back to the homepage</Link>
  </>
)

export default LoginPage
