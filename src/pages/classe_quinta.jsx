import React from 'react'
import { ClassNodeSection } from '../special_components.jsx'

export function ClasseQuinta(props) {
  const app = props.app
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-left">
          <h1 className="mt-5">Classe quinta</h1>
          <ClassNodeSection app={app} node_serial='015'/>
          <ClassNodeSection app={app} node_serial='017'/>
          <ClassNodeSection app={app} node_serial='018'/>
          <ClassNodeSection app={app} node_serial='01A'/>
          <ClassNodeSection app={app} node_serial='01B'/>
          <ClassNodeSection app={app} node_serial='01C'/>
          <ClassNodeSection app={app} node_serial='020'/>
          <ClassNodeSection app={app} node_serial='021'/>
          <h3>Studio di funzioni (dominio)</h3>
          <p>Stabilisci il dominio delle seguenti funzioni.</p>
          <ol type='a'>
            <li>{'$y = 3 - x^3 + \\sin(x)$'}</li>
            <li>{'$y = \\frac{5 - 2x}{4x + 3}$'}</li>
            <li>{'$y = \\frac14x + \\sqrt{8 - 5x}$'}</li>
            <li>{'$y = 12 - \\log_3\\!{\\left(4x + \\frac13\\right)}$'}</li>
            <li>{'$y = 5 + \\frac{5}{2 - x} + \\frac{3x + 1}{x^2 - 8x + 15}$'}</li>
            <li>{'$y = \\sqrt[3]{3x + 8} - \\sqrt{4x^2 + x - 3}$'}</li>
            <li>{'$y = \\log_4({3x + 2}) + \\sqrt{5 - x + \\frac14}$'}</li>
          </ol>
          <h3>Proprietà delle funzioni</h3>
          <p>Ricordando le definizioni di funzione <em>pari</em>, <em>dispari</em>, <em>iniettiva</em>, <em>suriettiva</em>, <em>crescente</em>, <em>decrescente</em>, <em>periodica</em> e <em>limitata</em>, stabilisci dal grafico e analiticamente (quando puoi) quali caratteristiche hanno le seguenti funzioni.</p>
          <ol type='a'>
            <h5>Funzioni polinomiali</h5>
            <li>{'$y = 3x + 4$'}</li>
            <li>{'$y = 9x^2 - 16$'}</li>
            <li>{'$y = \\frac14x^3 - \\frac34x$'}</li>
            <li>{'$y = -x^4 + 2x^3 - 5$'}</li>
            <h5>Funzioni polinomiali fratte</h5>
            <li>{'$y = \\frac{1}{x - 1}$'}</li>
            <li>{'$y= \\frac{x^2+2}{x^2-2}$'}</li>
            <li>{'$y = 3 + \\frac{1}{x-3} - \\frac{2}{x+5}$'}</li>
            <li>{'$y = \\frac{1}{1 + \\frac{1}{x}}$'}</li>
            <h5>Funzioni irrazionali</h5>
            <li>{'$y = \\sqrt{x}$'}</li>
            <li>{'$y = \\sqrt{x^2 - 4}$'}</li>
            <li>{'$y = \\sqrt[3]{x^5}$'}</li>
            <li>{'$y = \\frac{1}{\\sqrt{x + 4}}$'}</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
