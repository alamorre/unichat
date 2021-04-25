import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"

export default function Chats() {
  const didMountRef = useRef(false)
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    history.push("/auth")
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }

  function postUser(data) {
    axios.post(
      'https://api.chatengine.io/users/',
      data,
      { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY }}
    )
    
    .then(() => setLoading(false))

    .catch(e => console.log('e', e.response))
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!currentUser || currentUser === null) {
        history.push('/auth')
        return
      }
      
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": '784bdb9e-8724-4f63-8ab6-3c10d59f74a7',
          "user-name": currentUser.email,
          "user-secret": currentUser.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', currentUser.email)
        formdata.append('username', currentUser.email)
        formdata.append('secret', currentUser.uid)

        getFile(currentUser.photoURL)

        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)
          postUser(formdata)
        })
      })
    }
  }, [currentUser, history])

  if (!currentUser) return <div />

  if (loading) return <div>Loading...</div>

  return (
    <div style={{ position: 'absolute', top: '0px', left: '0px', width: '100vw', height: '100vh' }}>
      <div style={{ width: '100%', height: '66px', backgroundColor: '#002766' }}>
        <div style={{ position: 'absolute', left: '22px', top: '12px', fontSize: '32px', fontWeight: '700', color: 'white' }}>
          Unichat
        </div>

        <div 
          onClick={handleLogout} 
          style={{ position: 'absolute', top: '22px', right: '22px', color: 'white', cursor: 'pointer' }}
        >
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='784bdb9e-8724-4f63-8ab6-3c10d59f74a7'
        userName={currentUser.email}
        userSecret={currentUser.uid}
      />
    </div>
  )
}
