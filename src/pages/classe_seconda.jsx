import React from 'react'
import { ClassNodeSection } from '../special_components.jsx'
// import { Link, Navbar } from './generic_components.jsx'

export function ClasseSeconda(props) {
  const app = props.app
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-left">
          <h1 className="mt-5">Classe seconda</h1>
          <ClassNodeSection app={app} node_serial='014'/>
          <ClassNodeSection app={app} node_serial='015'/>
          <ClassNodeSection app={app} node_serial='016'/>
          <ClassNodeSection app={app} node_serial='017'/>
          <ClassNodeSection app={app} node_serial='012'/>
          <ClassNodeSection app={app} node_serial='018'/>
          <ClassNodeSection app={app} node_serial='01A'/>
          <ClassNodeSection app={app} node_serial='01B'/>
          <ClassNodeSection app={app} node_serial='01C'/>
          {/* <h3>Cinque operazioni e precedenza</h3>
          <p>Ricordando le regole della precedenza, calcola il valore delle seguenti espressioni.</p>
          <ol type='a'>
            <li>{'$ -5 \\cdot (12 - 3 + 4) - 2 \\cdot [3 - 16 : (-2 +4)]^2 $'}</li>
            <li>{'$ [-3 + (-5) \\cdot (-1)]^3 + [-4 -(1-2)]^2$'}</li>
            <li>{'$[2 \\cdot (-3)^2 + 2 \\cdot (-3) \\cdot (-2)]^2 : [2^4 - 3 \\cdot (+6)]^2$'}</li>
            <li>{'$[3 \\cdot (-1)^2 - 3 \\cdot (-3) \\cdot (-3)]^3 : [2^2 + 5 \\cdot (-2)^2]^3$'}</li>
          </ol>
          <h3>Operazioni singole con le frazioni</h3>
          <p>Esegui i calcoli proposti e semplifica il risultato.</p>
          <ol type='a'>
            <li>{'$ \\frac 12 + \\frac 32, \\quad \\quad \\frac{7}{11} + \\frac{4}{11}$'}</li>
            <li>{'$-\\frac32 + \\frac43, \\quad \\quad -\\frac{2}{3} + \\frac34$'}</li>
            <li>{'$\\frac56 - \\frac{{5}}{{12}}, \\quad \\quad 1 - \\frac32$'}</li>
            <li>{'$\\frac 1 5 - 1, \\quad \\quad 4 + \\frac32 - \\frac34$'}</li>
            <li>{'$\\frac32 \\cdot \\frac43, \\quad \\quad 6 \\cdot \\frac52$'}</li>
            <li>{'$ -\\frac65 \\cdot \\left( - \\frac43 \\right) \\quad \\quad \\frac23 \\cdot \\frac29 $'}</li>
            <li>{'$ \\frac55 \\cdot \\frac58 \\cdot \\left( - \\frac56 \\right), \\quad \\quad \\frac32 \\cdot \\left( - \\frac89 \\right) \\cdot \\frac56 $'}</li>
            <li>{'$ \\frac32 : \\frac43, \\quad \\quad - \\frac65 : \\left( - \\frac23 \\right) $'}</li>
            <li>{'$ \\frac{+3}{2} : \\frac{-3}{2}, \\quad \\quad \\frac25 : \\frac58 : \\left( - \\frac56 \\right) $'}</li>
            <li>{'$ \\left( - \\frac23 \\right)^2, \\quad \\quad \\left( \\frac12 - 1 \\right)^3 $'}</li>
            <li>{'$ \\left( - \\frac12 \\right)^3, \\quad \\quad \\left(-\\frac35 \\right)^0 $'}</li>
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
          </ol>
          <h3>Espressioni letterali</h3>
          <p>Calcola il valore delle seguenti espressioni letterali sostituendo l'opportuno valore alle lettere.</p>
          <ol type='a'>
            <li>{'$5a^2b \\qquad$ per $a = -\\frac12$ e $b = \\frac35$'}</li>
            <li>{'$\\frac32 a^2 + \\frac12 a - 1 \\qquad$ per $a = 0$, per $a = -1$ e per $a = 2$'}</li>
            <li>{'$2x^5 - 8x^4 + 3x^3 + 2x^2 - 7x + 8 \\qquad$ per $x = 1$ e per $x = -1$'}</li>
            <li>{'$2a - b - 3ab \\qquad$ per $a = \\frac12$ e $b = -\\frac13$'}</li>
          </ol> */}
        </div>
      </div>
    </div>
  )
}
