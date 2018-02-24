import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as actions from './actions.jsx'
import * as helpers from './helpers.jsx'
import { reduce } from './reducer.jsx'
import { Button, ButtonGroup, Form, Input, Link, Loader, Navbar, ShowcaseRow } from './basicComponents.jsx'
import { MainNavbar, PageSelector } from './complexComponents.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageState: { pageName: 'login' },
    }
    this.dispatch = (() => {
      return function(action) {
        // console.log(
        //   "Dispatched action",
        //   action,
        //   "\nPrevious state",
        //   this.state,
        //   "\nNext state",
        //   this.reduce(this.state, action)
        // );
        this.setState(this.reduce(this.state, action))
      }
    })().bind(this)
    this.reduce = reduce.bind(this)
    this.actions = actions
    this.downflow = (() =>
      Object.assign({}, this.state, {
        actions: this.actions,
        dispatch: this.dispatch,
      })).bind(this)
  }
  render() {
    const downflow = this.downflow()
    return (
      <div className="App">
        <MainNavbar {...downflow} />
        <PageSelector {...downflow} />
      </div>
    )
  }
}

export default App
