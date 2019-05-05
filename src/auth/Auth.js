import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { auth } from '../firebase'
import { Logout, UserContext } from '.'

function Auth({ children, location }) {
  const [user, setUser] = useState(null)
  const isLoginPage = location.pathname === '/login'

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(user)
      }
    })
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
      {user && <Logout />}
      {!user && !isLoginPage && <Redirect to="/login" />}
      {user && isLoginPage && <Redirect to="/" />}
    </UserContext.Provider>
  )
}

export default withRouter(Auth)
