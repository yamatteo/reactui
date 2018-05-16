import React, { Component } from 'react'
import { api } from '../fetch.jsx'
import { AutoForm, Link } from '../generic_components.jsx'

export function MainPage(props) {
  const app = props.app
  const set = app.set
  const profile = (() => {
    if (app.state.page_state && app.state.page_state.profile) {
      return app.state.page_state.profile
    } else {
      api('/api/profile', app.state.user_state).then(res => set(['page_state', 'profile'], res.profile))
      return undefined
    }
  })()
  if (profile) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mt-5">Pagina principale</h3>
            <p>
              Hai un punteggio complessivo del{' '}
              {Math.ceil(100 *
                Object.values(profile.means).reduce((prev, curr) => prev + curr, 0) /
                Object.keys(profile.means).length)}%.
            </p>
            <p>Svolgi un <Link lambda={()=>set(['page_state'], {'page_name':'auto_question'})}>esercizio</Link>.</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mt-5">Pagina principale</h3>
            <div>
              <p>Caricamento...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
