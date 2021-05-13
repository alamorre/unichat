import React from "react"

import { GoogleOutlined, FacebookOutlined, LoadingOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { useAuth } from "../contexts/AuthContext"

import { auth } from "../firebase"

export default function Login() {
  const { loading } = useAuth()

  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Unichat!</h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>

        <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
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
