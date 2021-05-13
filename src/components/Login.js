import React from "react"

import { GoogleOutlined, FacebookOutlined, LoadingOutlined } from '@ant-design/icons'

import { useAuth } from "../contexts/AuthContext"

export default function Login() {
  const { loading, facebookLogin, googleLogin } = useAuth()

  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Unichat!</h2>

        <div
          className='login-button google'
          onClick={() => googleLogin()}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br /> <br />

        <div
          className='login-button facebook'
          onClick={() => facebookLogin()}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>

      { 
        loading && 
        <div id='loading-container'>
          <LoadingOutlined id='loading-icon' /> 
        </div>
      }
    </div>
  )
}
