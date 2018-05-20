import React, { Component } from 'react'
import { api } from '../fetch.jsx'
import { AutoForm, Link } from '../generic_components.jsx'

export function LoginPage(props) {
  const app = props.app
  const set = app.set
  const page_state = props.page_state || app.state.page_state || {}
  const username = props.page_state && props.page_state.loginForm && props.page_state.loginForm.username
  const password = props.page_state && props.page_state.loginForm && props.page_state.loginForm.password
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="mt-5">Pagina di accesso</h3>
          <div>
            <p>Prima di procedere, inserisci nome utente e password:</p>
            <AutoForm
              app={app}
              endpoint="/login"
              inputs={{
                username: { label: 'Username' },
                password: { label: 'Password', type: 'password' },
                submit: { type: 'submit', value: 'Accedi', className: 'btn btn-secondary w-100' },
              }}
              lambda={(res)=>{
                set(['user_state'], res)(['page_state'], {page_name:'main'})
              }}
            />
          </div>
          <hr />
        </div>
        <div className='col-12'>
          <p>Se non hai un profilo puoi richiederne uno alla pagina di <Link lambda={() => set(['page_state'], {page_name: 'signup'})}>registrazione</Link>.</p>
        </div>
      </div>
    </div>
  )
}
