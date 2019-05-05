import React, { useContext } from 'react'
import { auth } from '../firebase'
import { UserContext } from '.'

const onClickLogout = () => {
  auth.signOut()
}

const Logout = () => {
  const user = useContext(UserContext)

  if (user)
    return <button onClick={onClickLogout}>Logout</button>

  return null
}

export default Logout
