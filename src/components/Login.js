import React from "react"

import firebase from "firebase/app"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

export default function Login() {
  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider)
  }
  
  function facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithRedirect(provider)
  }

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
