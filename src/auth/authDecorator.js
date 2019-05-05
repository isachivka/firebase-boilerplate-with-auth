import React, { useState, useEffect } from 'react'
import firebase, { auth } from '../firebase'
import { UserContext } from '.'

function authDecorator(WrappedComponent) {
  return function AuthDecorator() {
    const [user, setUser] = useState(null)

    useEffect(() => {
      return auth.onAuthStateChanged(user => {
        if (user) {
          setUser(user)
        } else {
          const provider = new firebase.auth.GithubAuthProvider()
          auth
            .signInWithPopup(provider)
            .then(result => {
              console.log('success auth', result)
            })
            .catch(function(error) {
              console.log('error auth', error)
            })
        }
      })
    }, [])

    return (
      <UserContext.Provider value={user}>
        <WrappedComponent />
      </UserContext.Provider>
    )
  }
}

export default authDecorator
