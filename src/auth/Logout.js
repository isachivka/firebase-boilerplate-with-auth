import React from 'react'
import { auth } from '../firebase'

const onClickLogout = () => {
  auth.signOut()
}

const Logout = () => {
  return <button onClick={onClickLogout}>Logout</button>
}

export default Logout
