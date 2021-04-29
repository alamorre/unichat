import React from "react"

import firebase from "firebase/app"
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import { useAuth } from "../contexts/AuthContext"

export default function Login() {
  const { login } = useAuth()

  return (
    <div>
      <h2>Welcome</h2>

      <div
        className='login-button'
        onClick={() => login(new firebase.auth.GoogleAuthProvider())}
      >
        <GoogleOutlined /> Sign In with Google
      </div>

      <br /> <br />

      <div
        className='login-button'
        onClick={() => login(new firebase.auth.FacebookAuthProvider())}
      >
        <FacebookOutlined /> Sign In with Facebook
      </div>
    </div>
  )
}
