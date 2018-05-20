import React, { Component } from 'react'
import { OverVisible, UnderVisible, Link, Navbar, NavbarMr, NavbarMl } from './generic_components.jsx'
import { PageSelector } from './pages/selector.jsx'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { page_state: { page_name: 'welcome' } }
    this.set = this.set.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  _array_set_state(array, value, prevState) {
    const nextState = JSON.parse(JSON.stringify(prevState))
    if (array.length == 1) {
      nextState[array[0]] = value
    } else {
      const subState = prevState[array[0]] || {}
      nextState[array[0]] = this._array_set_state(array.slice(1), value, subState)
    }
    return nextState
  }
  set(array, value, _prevState) {
    const prevState = (() => {
      if (_prevState == undefined) {
        return this.state
      } else {
        return _prevState
      }
    })()
    const nextState = this._array_set_state(array, value, prevState)
    this.setState(nextState)
    return (array, value) => this.set(array, value, nextState)
  }
  componentDidMount() {
    try {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, 'root'])
    } catch (e) {}
    document.addEventListener('keydown', this.handleKeyPress, false)
  }
  componentDidUpdate() {
    try {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, 'root'])
    } catch (e) {}
  }
  handleKeyPress(event) {
    if (event.key == 'Insert') {
      if (this.state.experimental) {
        this.set(['experimental'], false)(['foo'], 'baz')
      } else {
        this.set(['experimental'], true)(['foo'], 'bar')
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar className="navbar navbar-expand navbar-dark bg-dark">
          <Link
            className="navbar-brand"
            lambda={() =>
              this.set(['page_state'], {
                page_name: this.state.user_state && this.state.user_state.username ? 'main' : 'welcome',
              })
            }
            text={this.state.experimental ? 'Xper' : 'Yamath'}
          />
          <NavbarMl>
            { this.state.user_state && this.state.user_state.username && (
              <Link key="message" className="nav-link" lambda={() => this.set(['page_state'], { page_name: 'message' })}>
                <OverVisible type="inline">Messaggi</OverVisible>
                <span className="oi oi-mail" />
              </Link>
            )}
            <Link
              key="login"
              className="nav-link"
              lambda={() => this.set(['page_state'], { page_name: 'login' })(['user_state'], {})}
            >
              <OverVisible type="inline">
                {this.state.user_state && this.state.user_state.username ? 'Logout ' : 'Login '}{' '}
              </OverVisible>{' '}
              <span
                className={
                  this.state.user_state && this.state.user_state.username
                    ? 'oi oi-account-logout'
                    : 'oi oi-account-login'
                }
              />
            </Link>
          </NavbarMl>
        </Navbar>
        <UnderVisible>Text</UnderVisible>
        <PageSelector app={this} />
      </div>
    )
  }
}

export default App
