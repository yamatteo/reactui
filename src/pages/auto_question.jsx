import React from 'react'
import { Button, Link, Navbar } from '../generic_components.jsx'
import { api } from '../fetch.jsx'

export function AutoQuestionPage(props) {
  const app = props.app
  const set = app.set
  const question = (() => {
    try {
      return props.app.state.page_state.question
    } catch (e) {
      return undefined
    }
  })()
  if (question) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-left">
            <h1 className="mt-5">Domanda {question.serial}</h1>
            <p>{question.question}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 col-12">
            <Button
              text="Mostra soluzione"
              className="btn btn-warning w-100"
              lambda={() => set(['page_state', 'showSolution'], true)}
            />
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-5 col-12">
            <Button
              text="Un altro"
              className="btn btn-success w-100"
              lambda={() => set(['page_state', 'showSolution'], false)(['page_state', 'question'], null)}
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12">
            {app.state.page_state.showSolution && (
              <div>
                <h3>Soluzione:</h3>
                <p>{question.solution}</p>
                <h4>Com'è andata?</h4>
                <div className="row">
                  <div className="col-md-3 col-12">
                    <Button
                      text="Banale"
                      className="btn btn-primary w-100"
                      lambda={() => {
                        api('/api/update_mean', {
                          username: app.state.user_state.username,
                          fasthash: app.state.user_state.fasthash,
                          question_serial: app.state.page_state.question.serial,
                          mean_delta: 0.4,
                        }).then(res => set(['page_state', 'showSolution'], false)(['page_state', 'question'], null))
                      }}
                    />
                  </div>
                  <div className="col-md-3 col-12">
                    <Button
                      text="Fattibile"
                      className="btn btn-success w-100"
                      lambda={() => {
                        api('/api/update_mean', {
                          username: app.state.user_state.username,
                          fasthash: app.state.user_state.fasthash,
                          question_serial: app.state.page_state.question.serial,
                          mean_delta: 0.1,
                        }).then(res => set(['page_state', 'showSolution'], false)(['page_state', 'question'], null))
                      }}
                    />
                  </div>
                  <div className="col-md-3 col-12">
                    <Button
                      text="Sbagliato"
                      className="btn btn-warning w-100"
                      lambda={() => {
                        api('/api/update_mean', {
                          username: app.state.user_state.username,
                          fasthash: app.state.user_state.fasthash,
                          question_serial: app.state.page_state.question.serial,
                          mean_delta: -0.1,
                        }).then(res => set(['page_state', 'showSolution'], false)(['page_state', 'question'], null))
                      }}
                    />
                  </div>
                  <div className="col-md-3 col-12">
                    <Button
                      text="Incomprensibile"
                      className="btn btn-danger w-100"
                      lambda={() => {
                        api('/api/update_mean', {
                          username: app.state.user_state.username,
                          fasthash: app.state.user_state.fasthash,
                          question_serial: app.state.page_state.question.serial,
                          mean_delta: -0.3,
                        }).then(res => set(['page_state', 'showSolution'], false)(['page_state', 'question'], null))
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  } else {
    api('/api/auto_question', app.state.user_state).then(res => set(['page_state', 'question'], res.question))
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">...caricando...</h1>
          </div>
        </div>
      </div>
    )
  }
}
