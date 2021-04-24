import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import { auth } from "../firebase"

export default function Dashboard() {
  const { currentUser } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try {
      await auth.signOut()
      history.push("/auth")
    } catch {
      console.log('error')
    }
  }



  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
