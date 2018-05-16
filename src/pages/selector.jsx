import React, { Component } from 'react'
import { AllQuestionsPage } from './all_questions.jsx'
import { AutoQuestionPage } from './auto_question.jsx'
import { ClassePrima } from './classe_prima.jsx'
import { ClasseSeconda } from './classe_seconda.jsx'
import { ClasseTerza } from './classe_terza.jsx'
import { ClasseQuarta } from './classe_quarta.jsx'
import { ClasseQuinta } from './classe_quinta.jsx'
import { LoginPage } from './login.jsx'
import { MainPage } from './main.jsx'
import { QuestionPage } from './question.jsx'
import { RandomQuestionPage } from './random_question.jsx'
import { SignupPage } from './signup.jsx'
import { WelcomePage } from './welcome.jsx'

export function PageSelector(props) {
  const app = props.app
  const page_name = (() => {
    try {
      return app.state.page_state.page_name
    } catch (e) {
      alert('Deprecated page_name!')
      return props.page_name || (props.app && props.app.state && props.app.state.page_name)
    }
  })();
  const dict = {
    all_questions: <AllQuestionsPage app={app}/>,
    auto_question: <AutoQuestionPage app={app}/>,
    classe_prima: <ClassePrima app={app}/>,
    classe_seconda: <ClasseSeconda app={app}/>,
    classe_terza: <ClasseTerza app={app}/>,
    classe_quarta: <ClasseQuarta app={app}/>,
    classe_quinta: <ClasseQuinta app={app}/>,
    login: <LoginPage app={app}/>,
    main: <MainPage app={app}/>,
    question: <QuestionPage app={app}/>,
    random_question: <RandomQuestionPage app={app}/>,
    signup: <SignupPage app={app}/>,
    welcome: <WelcomePage app={app}/>,
  }
  try {
    if (! dict[page_name] ) { throw 'KeyError' }
    return dict[page_name]
  } catch (e) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mt-5">Errore</h1>
            <p>La pagina richiesta non può essere visualizzata. Contatta l'autore.</p>
          </div>
        </div>
      </div>
    )
  }
}
