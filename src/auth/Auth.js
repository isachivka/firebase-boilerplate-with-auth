import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
// 👇 unsafe
import { __RouterContext as RouterContext } from 'react-router'

import { auth } from '../firebase'
import routes from '../routes'
import { Logout, UserContext } from '.'

function Auth({ children }) {
  const [user, setUser] = useState(undefined)
  const { location } = useContext(RouterContext)

  useEffect(() => {
    return auth.onAuthStateChanged(result => {
      console.log(result)
      if (result) {
        setUser({
          uid: result.uid,
          // displayName
          // email
          // emailVerified
          // isAnonymous
          // phoneNumber
          // photoURL
          // providerData
          // metadata
          //   creationTime
          //   lastSignInTime
        })
      } else {
        setUser(null)
      }
    })
  }, [])

  const isAuthStateReceived = user !== undefined
  const isAuthorized = isAuthStateReceived && user
  const isLoginPage = location.pathname === routes.login

  if (!isAuthStateReceived) return null

  return (
    <UserContext.Provider value={user}>
      {children}
      {isAuthorized && <Logout />}
      {isAuthorized
        ? isLoginPage && <Redirect to="/" />
        : !isLoginPage && <Redirect to="/login" />}
    </UserContext.Provider>
  )
}

// export default withRouter(Auth)
export default Auth
