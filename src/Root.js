import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Auth, Login } from './auth'
import routes from './routes'
import YourselfChat from './YourselfChat'

const Root = () => {
  return (
    <Router>
      <Auth>
        <Route path={routes.root} exact component={YourselfChat} />
        <Route path={routes.login} exact component={Login} />
      </Auth>
    </Router>
  )
}

export default Root
