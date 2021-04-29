import React, { useContext, useState, useEffect } from "react"

import { useHistory } from "react-router-dom"

import { auth } from "../firebase"
import firebase from "firebase/app"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const history = useHistory()

  function facebookLogin() { 
    return auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) 
  }

  function googleLogin() { 
    return auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) 
  }

  function logout() { return auth.signOut() }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      history.push('/')
    })
  }, [currentUser, history])

  const value = {
    currentUser,
    googleLogin,
    facebookLogin,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}
