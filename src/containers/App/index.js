import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, NotFound, ComparePage } from '../'

class App extends Component {
  render() {
    console.log("From app");
    console.log(this.props)
    return (
      <div className="app">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/compare/:pathParam1?" component={ComparePage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
