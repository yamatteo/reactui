import React from 'react'
import { Button, Link, Navbar } from '../generic_components.jsx'
import { api } from '../fetch.jsx'

export function RandomQuestionPage(props) {
  const app = props.app
  const set = app.set
  const node_serial = app.state.page_state.node_serial
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
              text="Altro simile"
              className="btn btn-success w-100"
              lambda={() =>
                set(['page_state', 'showSolution'], false)(['page_state', 'question'], null)
              }
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12">{app.state.page_state.showSolution && <p>{question.solution}</p>}</div>
        </div>
      </div>
    )
  } else {
    const node_questions = (() => {
      try {
        return app.state.nodes[node_serial].questions
      } catch (e) {
        return undefined
      }
    })()
    if (node_questions) {
      set(['page_state', 'question'], node_questions[Math.floor(Math.random() * node_questions.length)])
    } else {
      api('/api/node_questions', { node_serial: node_serial }).then(res =>
        set(['nodes', node_serial, 'questions'], res.questions),
      )
    }
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
