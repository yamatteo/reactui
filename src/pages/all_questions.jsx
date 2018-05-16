import React, { Component } from 'react'
import { Link, Navbar } from '../generic_components.jsx'
import { ClassNodeSection } from '../special_components.jsx'
import { api } from '../fetch.jsx'

export function AllQuestionsPage(props) {
  const app = props.app
  const set = app.set
  const node_serial = app.state.page_state.node_serial
  const questions = (() => {
    try {
      return app.state.nodes[node_serial].questions
    } catch (e) {
      return undefined
    }
  })()
  if (questions) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-left">
            <h1 className="mt-5">Domande</h1>
            { questions.map(question => (
              <div className='row'>
                <div className='col-lg-12'>
                  <p><span>Domanda { question.serial }: </span>{question.question}</p>
                  <p><span>Soluzione: </span> {question.solution}</p>
                  <hr/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    api('/api/node_questions', { node_serial: node_serial }).then(res =>
      set(['nodes', node_serial, 'questions'], res.questions),
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Caricamento in corso</h1>
          </div>
        </div>
      </div>
    )
  }
}
