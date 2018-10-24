import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Info from './components/Info'

import './App.css'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route path="/course/:slug?" component={Info} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

