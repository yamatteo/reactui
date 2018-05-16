import React, { Component } from 'react'
import { api } from '../fetch.jsx'
import { AutoForm, Link } from '../generic_components.jsx'

export function SignupPage(props) {
  const app = props.app
  const set = app.set
  const page_state = props.page_state || app.state.page_state || {}
  const username = props.page_state && props.page_state.loginForm && props.page_state.loginForm.username
  const password = props.page_state && props.page_state.loginForm && props.page_state.loginForm.password
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="mt-5">Pagina di registrazione</h3>
          <div>
            <p>Se non hai ancora un profilo inserisci i dati richiesti.</p>
            <p>Puoi scegliere il nome utente che preferisci, basta che non sia già in uso.</p>
            <p>L'indirizzo mail verrà utilizzato esclusivamente per inviare una mail con la password di accesso in caso di smarrimento.</p>
            <AutoForm
              app={app}
              endpoint="/api/signup"
              inputs={{
                username: { label: 'Username' },
                email: { label: 'Indirizzo email' },
                password: { label: 'Password', type:'password'},
                repassword: { label: 'Password (ancora)', type:'password'},
                submit: { type: 'submit', value: 'Registrati', className: 'btn btn-secondary w-100' },
              }}
              lambda={(res) => {
                alert('Utente creato con successo')
                set(['page_state'], {page_name: 'login'})
              }}
            />
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}
