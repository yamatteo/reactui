import React from 'react'
import { Link, Navbar } from '../generic_components.jsx'

export function WelcomePage(props) {
  const app = props.app
  const set = app.set
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-left">
          <h1 className="mt-5">Benvenuto</h1>
          <p className='lead'>Novità: da oggi puoi effettuare il <Link lambda={() => set(['page_state'], {page_name:'login'})}>login <span className='oi oi-account-login'/></Link> e tracciare i tuoi progressi.</p>

          <p>
            Da qui puoi accedere alle singole pagine di ogni classe dove troverai esercizi suddivisi per
            tipologia.
          </p>
          <ul className="list-unstyled">
            <li>
              <Link text="Classe prima" lambda={() => set(['page_state'], { page_name: 'classe_prima' })} />
            </li>
            <li>
              <Link text="Classe seconda" lambda={() => set(['page_state'], { page_name: 'classe_seconda' })} />
            </li>
            <li>
              <Link text="Classe terza" lambda={() => set(['page_state'], { page_name: 'classe_terza' })} />
            </li>
            <li>
              <Link text="Classe quarta" lambda={() => set(['page_state'], { page_name: 'classe_quarta' })} />
            </li>
            <li>
              <Link text="Classe quinta" lambda={() => set(['page_state'], { page_name: 'classe_quinta' })} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};
