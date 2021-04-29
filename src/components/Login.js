import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import { useAuth } from "../contexts/AuthContext"

export default function Login() {
  const { facebookLogin, googleLogin } = useAuth()

  return (
    <div>
      <h2>Welcome</h2>

      <div
        className='login-button'
        onClick={() => googleLogin()}
      >
        <GoogleOutlined /> Sign In with Google
      </div>

      <br /> <br />

      <div
        className='login-button'
        onClick={() => facebookLogin()}
      >
        <FacebookOutlined /> Sign In with Facebook
      </div>
    </div>
  )
}
