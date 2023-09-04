import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaRegUser, FaLock, FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import './Login.css'

function WelcomeMessage() {
  return (
    <>
      <h3 className="mb-4">Sign in</h3>
      <h4 className="mb-4">Welcome back</h4>
    </>
  )
}

function UsernameField() {
  return (
    <div className="form-outline">
      <label id="userNameLabel" htmlFor="name" className="Form-label">
        User name
      </label>
      <div className="input-container">
        <FaRegUser className="icon" />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter username"
          // className="form-control"
        />
      </div>
    </div>
  )
}

function PasswordField() {
  return (
    <div className="form-group">
      <label htmlFor="password" className="Form-label">
        Password
      </label>
      <div className="input-container">
        <FaLock className="icon" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          //   className="form-control"
        />
        <span className="toggle-password">
          <FaRegEyeSlash className="icon" />
        </span>
        <FaRegEye className="icon" />
      </div>
    </div>
  )
}

function SubmitButton() {
  return (
    <div className="form-group">
      <button type="button" className="btn btn-primary btn-block mb-8">
        Sign in
      </button>
    </div>
  )
}

function AfterMessage() {
  return (
    <div>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  )
}

export const Login: React.FC = () => {
  return (
    <Fragment>
      <header className="Login-header">
        <WelcomeMessage />
        <UsernameField />
        <PasswordField />
        <SubmitButton />
        <AfterMessage />
      </header>
    </Fragment>
  )
}
