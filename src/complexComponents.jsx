import React, { Component } from 'react'
import logo from './logo.svg'
import { api, whichInsertionFields, whichSelectionFields } from './helpers.jsx'
import { Button, ButtonGroup, Form, Input, Link, Loader, Navbar, ShowcaseRow, Title } from './basicComponents.jsx'

export function MainNavbar(props) {
  const isSignedin = props.userState && props.userState.isSignedin
  const isadmin = props.userState && props.userState.isadmin
  const dispatch = props.dispatch
  const actions = props.actions
  const extraClassName = 'navbar-dark bg-dark'
  const brand = (
    <Link
      className="navbar-brand"
      dispatch={props.dispatch}
      text="Yamath"
      action={actions.stateUpdate('pageState', { pageName: isSignedin ? 'main' : 'login' })}
    />
  )
  const rightAligned = isSignedin ? (
    <Button
      className="btn btn-outline-warning"
      text="logout"
      dispatch={props.dispatch}
      action={actions.stateUpdate('', { pageState: { pageName: 'login' }, userState: { isSignedin: false } })}
    />
  ) : (
    undefined
  )
  return (
    <Navbar extraClassName={extraClassName} brand={brand} rightAligned={rightAligned}>
      {isadmin && (
        <Link
          text="Admin"
          className="nav-link"
          dispatch={props.dispatch}
          action={actions.stateUpdate('pageState', { pageName: 'admin' })}
        />
      )}
      {isadmin && (
        <Link
          text="Showcase"
          className="nav-link"
          dispatch={props.dispatch}
          action={actions.stateUpdate('pageState', { pageName: 'showcase' })}
        />
      )}
    </Navbar>
  )
}
export function PageAdmin(props) {
  const dispatch = props.dispatch
  const actions = props.actions
  const extraClassName = 'navbar-dark bg-secondary'
  return (
    <div>
      <Navbar extraClassName={extraClassName} {...props}>
        <Link
          text="Crud panel"
          className="nav-link"
          dispatch={dispatch}
          action={actions.stateUpdate('pageState.panelName', 'crud')}
        />
      </Navbar>
      <SelectorPanel {...props} />
    </div>
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
            api(
              '/api/login',
              {
                username: username,
                password: password,
              },
              { username: 'mockUser', fasthash: '0', isadmin: false },
            ).then(res => {
              if (!res.erroneous) {
                dispatch(actions.stateUpdate('userState', res))
                dispatch(actions.stateUpdate('userState.isSignedin', true))
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
export function PageShowcase(props) {
  // console.log('Original props', props);
  const dispatch = props.dispatch
  const actions = props.actions
  const state = Object.keys(props).reduce((obj, key) => {
    // console.log('..reducing', obj, key);
    if (key !== 'dispatch' && key !== 'actions') {
      // console.log('Insert', key, props[key]);
      obj[key] = props[key]
      return obj
    } else {
      return obj
    }
  }, {})
  // console.log('PageShowcase state:', Object.keys(props));
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
              Set state.a to{' '}
              {JSON.stringify({
                b: 0,
                c: 0,
                d: 0,
              })}
              <Button
                dispatch={dispatch}
                action={actions.stateUpdate('a', {
                  b: 0,
                  c: 0,
                  d: 0,
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
            <p>
              See app state:
              <Button
                className="btn btn-outline-success"
                text="State"
                lambda={() => alert('App state:' + JSON.stringify(state))}
              />
            </p>
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
            Standard <em>Button</em> with no props.
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
            Customizable <em>Button</em> by className, text and lambda function or action (requires dispatch).
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
            Customizable <em>Button Group</em> by className, values and lambdaGenerator/actionGenerator (requires
            dispatch)
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
            Customizable <em>Link</em> by className, text and lambda/action
          </p>
        </ShowcaseRow>
        <ShowcaseRow>
          <h3>Loader</h3>
          <Loader
            url="/api"
            data={{}}
            mockResponseData={{
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
                  data: {},
                  mockResponseData: {
                    text: 'Some text',
                    number: 42,
                  },
                })}
                dispatch={dispatch}
              />
            </p>
            {
              <Loader
                mockResponseData={state.mockLoader && state.mockLoader.mockResponseData}
                url={state.mockLoader && state.mockLoader.url}
                data={state.mockLoader && state.mockLoader.data}
              />
            }
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

export function PanelCrud(props) {
  const actions = props.actions
  const dispatch = props.dispatch
  const crudPanel = props.pageState && props.pageState.crudPanel
  const model = crudPanel && crudPanel.model
  const method = crudPanel && crudPanel.method
  const selectionFields = (method === 'Read' || method === 'Update' || method === 'Delete') && ((crudPanel && crudPanel.selectionFields) || whichSelectionFields(model))
  const insertionFields = (method === 'Create' || method === 'Update') && ((crudPanel && crudPanel.insertionFields) || whichInsertionFields(model))
  return (
    <div className="container">
      <p> </p>
      <Form
        lambda={() => {
          return null
        }}
      >
        <p>Seleziona modello e metodo:</p>
        <div className="form-group">
          <ButtonGroup
            className="btn btn-primary"
            values="User Node Question"
            selectedValue={model}
            actionGenerator={value => actions.stateUpdate('pageState.crudPanel.model', value)}
            dispatch={dispatch}
          />
        </div>
        <div className="form-group">
          <ButtonGroup
            className="btn btn-primary"
            values="Create Read Update Delete"
            selectedValue={method}
            actionGenerator={value => actions.stateUpdate('pageState.crudPanel.method', value)}
            dispatch={dispatch}
          />
        </div>
        <div className='form-group'>
          <p>Selection Arguments</p>
          { JSON.stringify(selectionFields) }
        </div>
        <div className='form-group'>
          <p>Insertion Arguments</p>
          { JSON.stringify(insertionFields) }
        </div>
        <Input name="submit" className="btn btn-primary" type="submit" value="Invia" />
      </Form>
    </div>
  )
}

export function SelectorPage(props) {
  const actions = props.actions
  const dispatch = props.dispatch
  const isSignedin = props.userState && props.userState.isSignedin
  const pageName = isSignedin ? props.pageState && props.pageState.pageName : 'login'
  if (pageName === 'admin') {
    return <PageAdmin {...props} />
  }
  if (pageName === 'login') {
    return <PageLogin {...props} />
  }
  if (pageName === 'showcase') {
    return <PageShowcase {...props} />
  }
  return <PageError {...props} />
}
export function SelectorPanel(props) {
  const panelName = props.pageState.panelName
  if (panelName === 'crud') {
    return <PanelCrud {...props} />
  }
  return (
    <div>
      <h2>Chose a panel</h2>
    </div>
  )
}
