import React, { useRef, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

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

      const userName = currentUser.email
      const userEmail = userName
      const userAvatar = currentUser.photoURL
      const userSecret = currentUser.uid
      
      console.log(userName, userEmail, userAvatar, userSecret)
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
