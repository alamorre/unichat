import React, { useRef, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

import axios from 'axios'

import { auth } from "../firebase"

export default function Dashboard() {
  const didMountRef = useRef(false)
  const { currentUser } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    history.push("/auth")
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": '784bdb9e-8724-4f63-8ab6-3c10d59f74a7',
          "user-name": currentUser.email,
          "user-secret": currentUser.uid
        }}
      )

      .then(() => {})

      .catch(e => {
        axios.post(
          'https://api.chatengine.io/users/',
          { "email": currentUser.email, "username": currentUser.email, "secret": currentUser.uid },
          { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY }}
        )
        
        .then(r => console.log('r', r))

        .catch(e => console.log('e', e.response))
      })
    }
  }, [currentUser])

  return (
    <>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
