import React, { useContext, useState, useEffect } from "react"

import { useHistory } from "react-router-dom"

import firebase from "firebase/app"

import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() { return useContext(AuthContext) }

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
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
      setLoading(false)
      history.push('/chats')
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
      {!loading && children}
    </AuthContext.Provider>
  )
}
