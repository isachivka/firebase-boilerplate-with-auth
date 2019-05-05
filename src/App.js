import React from 'react'
import Input from './Input'
import authDecorator from './auth/Auth'

function App() {
  return <Input />
}

export default authDecorator(App)
