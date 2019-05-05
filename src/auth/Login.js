import React from 'react'
import firebase, { auth } from '../firebase'

const onClickLogin = () => {
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

const Login = () => {
  return <button onClick={onClickLogin}>login</button>
}

export default Login
