import React from 'react'
import { authDecorator } from './auth'
import Input from './Input'

function App() {
  return <Input />
}

export default authDecorator(App)
