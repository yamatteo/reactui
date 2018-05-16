import React, { Component } from 'react'
import { Link, Navbar } from '../generic_components.jsx'
import { ClassNodeSection } from '../special_components.jsx'
import { api } from '../fetch.jsx'

export function ClassePrima(props) {
  const app = props.app
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-left">
          <h1 className="mt-5">Classe prima</h1>
          <ClassNodeSection app={app} node_serial='010'/>
          <ClassNodeSection app={app} node_serial='011'/>
          <ClassNodeSection app={app} node_serial='014'/>
          <ClassNodeSection app={app} node_serial='015'/>
          <ClassNodeSection app={app} node_serial='016'/>
          <ClassNodeSection app={app} node_serial='017'/>
          <ClassNodeSection app={app} node_serial='012'/>
          <ClassNodeSection app={app} node_serial='013'/>
          <ClassNodeSection app={app} node_serial='018'/>
          <ClassNodeSection app={app} node_serial='019'/>
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
          </ol> */}
          {/* <p class="lead">Complete with pre-defined file paths and responsive navigation!</p> */}
          {/* <ul class="list-unstyled">
            <li>Bootstrap 4.0.0</li>
            <li>jQuery 3.3.0</li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}
