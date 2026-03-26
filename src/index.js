import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HomeMileStoneClone1 from './views/home-mile-stone-clone1'
import Home1 from './views/home1'
import Home from './views/home'
import HomeMileStoneClone from './views/home-mile-stone-clone'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={HomeMileStoneClone1}
          exact
          path="/home-mile-stone-clone1"
        />
        <Route component={Home1} exact path="/home1" />
        <Route component={Home} exact path="/" />
        <Route
          component={HomeMileStoneClone}
          exact
          path="/home-mile-stone-clone"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
