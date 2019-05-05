import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Auth, Login } from './auth'
import YourselfChat from './YourselfChat'

const Root = () => {
  return (
    <Router>
      <Auth>
        <Route path="/" exact component={YourselfChat} />
        <Route path="/login" exact component={Login} />
      </Auth>
    </Router>
  )
}

export default Root
