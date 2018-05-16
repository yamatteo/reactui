import React from 'react'
import { ClassNodeSection } from '../special_components.jsx'
// import { Link, Navbar } from './generic_components.jsx'

export function ClasseQuarta(props) {
  const app = props.app
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-left">
          <h1 className="mt-5">Classe quarta</h1>
          <ClassNodeSection app={app} node_serial='015'/>
          <ClassNodeSection app={app} node_serial='016'/>
          <ClassNodeSection app={app} node_serial='017'/>
          <ClassNodeSection app={app} node_serial='018'/>
          <ClassNodeSection app={app} node_serial='01A'/>
          <ClassNodeSection app={app} node_serial='01B'/>
          <ClassNodeSection app={app} node_serial='01C'/>
          <ClassNodeSection app={app} node_serial='020'/>
          <ClassNodeSection app={app} node_serial='021'/>
          {/* <h3>Cinque operazioni e precedenza</h3>
          <p>Ricordando le regole della precedenza, calcola il valore delle seguenti espressioni.</p>
          <ol type='a'>
            <li>{'$ -5 \\cdot (12 - 3 + 4) - 2 \\cdot [3 - 16 : (-2 +4)]^2 $'}</li>
            <li>{'$ [-3 + (-5) \\cdot (-1)]^3 + [-4 -(1-2)]^2$'}</li>
            <li>{'$[2 \\cdot (-3)^2 + 2 \\cdot (-3) \\cdot (-2)]^2 : [2^4 - 3 \\cdot (+6)]^2$'}</li>
            <li>{'$[3 \\cdot (-1)^2 - 3 \\cdot (-3) \\cdot (-3)]^3 : [2^2 + 5 \\cdot (-2)^2]^3$'}</li>
          </ol>
          <h3>Espressioni con le frazioni</h3>
          <p>Ricordando le regole della precedenza e come si svolgono i calcoli tra frazioni, semplifica le seguenti espressioni.</p>
          <ol type='a'>
            <li>{'$\\left( \\frac23 - \\frac76 \\right) - \\left( 1 + \\frac56 \\right) : \\left(2 - \\frac13 \\right)$'}</li>
            <li>{'$\\left( \\frac53 - \\frac72 \\right) \\cdot \\frac45 + \\left[ \\left( \\frac13 - \\frac{1}{15} \\right) \\cdot \\frac52 \\right]^2$'}</li>
            <li>{'$\\frac{63}{55} \\cdot \\frac{44}{45} + \\frac{14}{75} \\cdot \\frac{15}{35} + \\frac{2}{25}\\cdot 10 - \\frac{16}{25}:\\frac{3}{5}+\\frac{1}{15}$'}</li>
            <li>{'$\\left\\{ \\left[ \\left( \\frac12 - \\frac23 \\right) : \\left(\\frac56 - \\frac{5}{12} \\right) \\cdot \\frac12 + \\frac34 \\right] : \\frac14 \\right\\} - \\frac23 \\cdot \\left(- \\frac35 \\right)$'}</li>
            <li>{'$ \\left( \\frac32 - 2 - \\frac14 \\right) - \\left( \\frac12 - \\frac54 \\right) $'}</li>
            <li>{'$ \\left( \\frac13 - 3 \\right) - \\left[ \\left( -\\frac12 + 2 \\right) + \\left( \\frac92 - 1 \\right) \\right] $'}</li>
          </ol> */}
          <h3>Equazioni lineari</h3>
          <p>Risolvi le seguenti equazioni.</p>
          <ol type='a'>
            <li>{'$3 - 2x = 8 + 2x$'}</li>
            <li>{'$\\frac23 x - 3 = \\frac13 x + 1$'}</li>
            <li>{'$\\frac65 x = \\frac{24}{5} - x$'}</li>
            <li>{'$3x - 2x + 1 = 2 + 3x - 1$'}</li>
            <li>{'$\\frac25 x - \\frac32 = \\frac32 x + \\frac{1}{10}$'}</li>
            <li>{'$\\frac56 x + \\frac32 = \\frac{25}{3} - \\frac{10}{2}x$'}</li>

          </ol>
          <h3>Disequazioni lineari</h3>
          <p>Risolvi le seguenti disequazioni ricordando che se moltiplico o divido per una quantità negativa, la direzione della disuguaglianza si inverte.</p>
          <ol type='a'>
            <li>{'$x - 3x - 9 < x - 2x + 2$'}</li>
            <li>{'$2 + 4x > 1 - 2x$'}</li>
            <li>{'$1 + x^2 \\leq -5 + x^2 - 2x + 1 + x + 1$'}</li>
            <li>{'$x^2 - 6x + 9 + 1 + 4x + 3x - 3 \\geq x^2 + 4x + 4$'}</li>
            <li>{'$-\\frac23 + x < \\frac14 x - \\frac14 + \\frac16 x - \\frac13$'}</li>
            <li>{'$\\frac15 x - \\frac15 - \\frac25 x + \\frac{1}{10} > \\frac12 - \\frac12 x$'}</li>

          </ol>
        </div>
      </div>
    </div>
  )
}
