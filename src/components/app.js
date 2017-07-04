import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './header'
import Messages from './messages';

import SignIn from './auth/signin'
import SignOut from './auth/signout'
import SignUp from './auth/signup'

import Home from './views/home'
import Feature from './views/feature'
import NotFound from './views/notfound'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Messages />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignIn} />
            <Route path="/signout" component={SignOut} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feature" component={Feature} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
