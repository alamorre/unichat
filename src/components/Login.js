import React from "react"
import { Card } from "react-bootstrap"

import firebase from "firebase/app"

export default function Login() {
  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider)
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>

          <div onClick={() => googleLogin()}>
            Sign In with Google
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
