import React, { Component } from 'react'
import logo from './logo.svg'
import { mockApi } from './helpers.jsx'
import { Button, ButtonGroup, Form, Input, Link, Loader, Navbar, ShowcaseRow, Title } from './basicComponents.jsx'

export function MainNavbar(props) {
  const isSignedin = props.userState && props.userState.isSignedin
  const isAdmin = props.userState && props.userState.isAdmin
  const dispatch = props.dispatch
  const actions = props.actions
  const extraClassName = 'navbar-dark bg-dark'
  const brand = <Link className="navbar-brand" dispatch={props.dispatch} text="Yamath" action={null} />
  const rightAligned = isSignedin ? (
    <Button className="btn btn-outline-warning" text="logout" dispatch={props.dispatch} action={null} />
  ) : (
    undefined
  )
  return (
    <Navbar extraClassName={extraClassName} brand={brand} rightAligned={rightAligned}>
      {isAdmin && <Link text="Admin" className="nav-item" />}
    </Navbar>
  )
}
export function PageError(props) {
  return (
    <div>
      <Title title="Error page" />
      <div className="container">
        <p>C'è stato un errore inspiegabile.</p>
      </div>
    </div>
  )
}
export function PageLogin(props) {
  const actions = props.actions
  const dispatch = props.dispatch
  const username = props.pageState && props.pageState.loginForm && props.pageState.loginForm.username
  const password = props.pageState && props.pageState.loginForm && props.pageState.loginForm.password
  return (
    <div>
      <Title title="Benvenut@ eternauta" />
      <div className="container">
        <p>Prima di procedere, inserisci nome utente e password:</p>
        <Form
          lambda={() => {
            mockApi('/api/login', {
              username: username,
              fasthash: '0000',
              isadmin: username === 'admin',
            }).then(res => {
              if (!res.erroneous) {
                dispatch(actions.stateUpdate('userState', res))
                dispatch(actions.stateUpdate('pageState', { pageName: 'main' }))
              } else {
                alert('TODO')
              }
            })
          }}
        >
          <div className="form-group">
            <label>Username</label>
            <Input
              name="username"
              className="form-control"
              type="text"
              value={username}
              actionGenerator={value => actions.stateUpdate('pageState.loginForm.username', value)}
              dispatch={dispatch}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Input
              name="password"
              className="form-control"
              type="password"
              value={password}
              actionGenerator={value => actions.stateUpdate('pageState.loginForm.password', value)}
              dispatch={dispatch}
            />
          </div>
          <Input name="submit" className="btn btn-primary" type="submit" value="Accedi" />
        </Form>
      </div>
    </div>
  )
}
export function PageSelector(props) {
  const actions = props.actions
  const dispatch = props.dispatch
  const pageState = props.pageState || {
    pageName: 'login',
  }
  const pageName = pageState.pageName || 'error'
  if (pageName === 'login') {
    return <PageLogin {...props} />
  }
  return <PageError {...props} />
}
export function PageShowcase(props) {
  const dispatch = props.dispatch
  const actions = props.actions
  const state = Object.keys(props).reduce((obj, key) => {
    if (key !== 'dispatch' && key !== 'actions') {
      obj[key] = props.key
      return obj
    }
  }, {})
  return (
    <div>
      <Title title="Showcase" />{' '}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header> */}
      <div className="container">
        <ShowcaseRow>
          <h3>Actions</h3>
          <div>
            <p>
              Reset state to{' '}
              {JSON.stringify({
                a: {
                  b: 0,
                  c: 0,
                  d: 0,
                },
              })}
              <Button
                dispatch={dispatch}
                action={actions.stateUpdate('', {
                  a: {
                    b: 0,
                    c: 0,
                    d: 0,
                  },
                })}
              />
            </p>
            <Button
              className="btn btn-primary"
              text="Set a = {b:11, c:{q:12, w:13}, d:[14, 15, 16]}"
              action={actions.stateUpdate('a', {
                b: 11,
                c: {
                  q: 12,
                  w: 13,
                },
                d: [14, 15, 16],
              })}
              dispatch={dispatch}
            />
            <Button
              className="btn btn-success"
              text="Set a.c.q = {r:17}"
              action={actions.stateUpdate('a.c.q', { r: 17 })}
              dispatch={dispatch}
            />
            <Button
              className="btn btn-success"
              text="Set a.d.1 = 18"
              action={actions.stateUpdate('a.d.1', 18)}
              dispatch={dispatch}
            />
            <Button
              className="btn btn-danger"
              text="Set a.b.x = 19"
              action={actions.stateUpdate('a.b.x', 19)}
              dispatch={dispatch}
            />
            <Button
              className="btn btn-outline-success"
              text="See app state"
              lambda={() => alert('App state:' + JSON.stringify(state))}
            />
          </div>
          <p>
            With actions you can set path-specific value of the state, but values can be any javascript (at least
            jsonable) object. Please note that you can't set attribute to non-object values of the state.
          </p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Button</h3>
          <Button />
          <p>
            Standard
            <em>Button</em>
            with no props.
          </p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Button</h3>
          <Button
            className="btn btn-outline-warning"
            text="Customized"
            lambda={() => {
              alert('Different onClick function.')
            }}
          />
          <p>
            Customizable
            <em>Button</em>
            by className, text and lambda function or action (requires dispatch).
          </p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>ButtonGroup</h3>
          <ButtonGroup
            className="btn btn-secondary"
            values="First Second Third"
            lambdaGenerator={value => () => {
              alert('Pressed button ' + value)
            }}
          />
          <p>
            Customizable
            <em>Button Group</em>
            by className, values and lambdaGenerator/actionGenerator (requires dispatch)
          </p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Form</h3>
          <div>
            <Form lambda={() => alert('Form submitted')}>
              <label>Username</label>
              <Input
                type="text"
                placeholder="username"
                dispatch={dispatch}
                value={state.mockLoginForm && state.mockLoginForm.username}
                actionGenerator={value => actions.stateUpdate('mockLoginForm.username', value)}
              />
              <label>Password</label>
              <Input
                type="password"
                placeholder="password"
                dispatch={dispatch}
                value={state.mockLoginForm && state.mockLoginForm.password}
                actionGenerator={value => actions.stateUpdate('mockLoginForm.password', value)}
              />
              <Input type="submit" value="Submit" />
            </Form>
          </div>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Input</h3>
          <div>
            <p>
              <Input
                type="password"
                value={state.mockLoaderValue}
                placeholder="insert password"
                dispatch={dispatch}
                actionGenerator={value => actions.stateUpdate('mockLoaderValue', value)}
              />
            </p>
            <p>
              See input value
              <Button lambda={() => alert(state.mockLoaderValue)} />
            </p>
          </div>
          <p>Input get className, type, value, placeholder and action/lambda generator customization</p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Link</h3>
          <Link className="text-success" text="Generic link" lambda={() => alert('Link pressed.')} />
          <p>
            Customizable
            <em>Link</em>
            by className, text and lambda/action
          </p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Loader</h3>
          <Loader
            url="/api"
            data={{
              text: 'Some text',
              number: 42,
            }}
          />
          <p>Loader directly provided with url and data.</p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Loader</h3>
          <div>
            <p>
              <Button
                text="Ajax call"
                action={actions.stateUpdate('mockLoader', {
                  url: '/api',
                  data: {
                    text: 'Some text',
                    number: 42,
                  },
                })}
                dispatch={dispatch}
              />
            </p>
            {<Loader url={state.mockLoader && state.mockLoader.url} data={state.mockLoader && state.mockLoader.data} />}
          </div>
          <p>
            Loaders are containers that, when mounted and provided with an url and some data, will fetch and load some
            content.
          </p>
        </ShowcaseRow>
        <ShowcaseRow>
          <div>
            <h3>Navbar</h3>
            <Navbar
              extraClassName="navbar-dark bg-dark"
              brand={<Link className="navbar-brand" text="Brand" />}
              rightAligned={[
                <Button className="btn btn-secondary nav-link" text="Something" />,
                <Button className="btn btn-warning btn-sm" text="..else" />,
              ]}
            >
              <Link className="nav-link" text="First" />
              <Link className="nav-link" text="Second" />
            </Navbar>
            <p>
              Navbar by extraClassName, brand (React Component), rightAligned (RC or Array of RCs) and its children
              (RCs)
            </p>
          </div>
        </ShowcaseRow>
      </div>
    </div>
  )
}
