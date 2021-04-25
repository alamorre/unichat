import React from "react"

import firebase from "firebase/app"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import { useAuth } from "../contexts/AuthContext"

export default function Login() {
  const { login } = useAuth()
  
  function googleLogin() { login(new firebase.auth.GoogleAuthProvider()) }
  function facebookLogin() { login(new firebase.auth.FacebookAuthProvider()) }

  return (
    <div>
      <h2>Welcome</h2>

      <div 
        onClick={() => googleLogin()}
        style={{ 
          cursor: 'pointer', 
          backgroundColor: '#1890ff', 
          color: 'white', 
          padding: '12px', 
          borderRadius: '8px', 
          display: 'inline-block' 
        }}
      >
        <GoogleOutlined /> Sign In with Google
      </div>

      <br /> <br />

      <div 
        onClick={() => facebookLogin()}
        style={{ 
          cursor: 'pointer', 
          backgroundColor: '#1890ff', 
          color: 'white', 
          padding: '12px', 
          borderRadius: '8px', 
          display: 'inline-block' 
        }}
      >
        <FacebookOutlined /> Sign In with Facebook
      </div>
    </div>
  )
}
