import React from 'react'
import firebase, { auth } from '../firebase'

const onClickLogin = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  auth
    .signInWithPopup(provider)
    .then(result => {
      console.info('Auth success:', result)
    })
    .catch(error => {
      console.error('Auth error: ', error)
    })
}

const Login = () => {
  return <button onClick={onClickLogin}>login</button>
}

export default Login
