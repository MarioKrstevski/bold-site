import React, { useContext } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link, navigate } from "gatsby"
import { isBrowser } from "../utils/auth-service"
import { users } from "../utils/user-database"

import '../utils/form.style.css'

import SEO from "../components/seo"
import AuthContext from "../context/AuthContext"

const LoginPage = () => {
  const { setUser } = useContext(AuthContext)

  const handleSubmit = ({ email, password }) => {
    if (!isBrowser) return false

    const found = users.find(
      user => user.email === email && user.password === password
    )

    if (found) {
      console.log("[User Exists: ], ", found)
      setUser(found)

      switch (found.role) {
        case "student":
          navigate(`/app/student/dashboard`)
          break
        case "donor":
          navigate(`/app/donor/dashboard`)
          break
        default:
          navigate(`/app/${found.role}/profile`)
      }

      return null
    }

    return false
  }

  return (
    <>
      <SEO title="Login Page" />

      <div className="loginForm">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            let errors = {}
            if (!values.email) {
              errors.email = "Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            handleSubmit(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" placeholder="Email"/>
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Sign In
              </button>
              <Link to="/app"> Move (bypass) </Link>
            </Form>
          )}
        </Formik>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </>
  )
}
export default LoginPage
