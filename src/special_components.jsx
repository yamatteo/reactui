import React, { Component } from 'react'
import { Link, Button } from './generic_components.jsx'
import { api } from './fetch.jsx'

export function ClassNodeSection(props) {
  const app = props.app
  const set = app.set
  const node_serial = props.node_serial
  const node = (() => {
    try {
      return app.state.nodes[node_serial]
    } catch (e) {
      return undefined
    }
  })()
  if (node) {
    const node_name = node.name
    return (
      <div className="row border-bottom">
        <div className="h5 col-md-8 col-12">{node_name}</div>
        <div className="col-md-4 col-12">
          <div className='no-gutters'>
          <div className="row">
            <div className='col-6 p-2'><Button className="btn btn-secondary w-100" lambda={() => set(['page_state'], {page_name:'random_question', node_serial:node_serial})}>Uno a caso</Button></div>
            <div className='col-6 p-2'><Button className="btn btn-secondary w-100" lambda={() => set(['page_state'], {page_name:'all_questions', node_serial:node_serial})}>Lista completa</Button></div>
            {/* <div className='col-sm-4 p-1'><Button className="btn btn-secondary w-100">Stampa</Button></div> */}
          </div>
        </div>
        </div>
      </div>
    )
  } else {
    api('/api/node', { node_serial: node_serial }).then(res => set(['nodes', node_serial], res.node))
    // api('/api/node_questions', { node_serial: node_serial }).then(res => set(['class_node_state', node_serial], {loaded:true, name:res.name, questions:res.questions}))
    return <h3>...caricamento...</h3>
  }
}

//   {/* <p>
//     <span className="h4">{node_name}:</span>
//     prova un esercizio
//     <Link
//       text="a caso"
//       lambda={() =>
//         set(['page_state'], { page_name: 'question' }).then(state =>
//           set(
//             ['question_page_state'],
//             {
//               loaded_question: false,
//               questionId: node_questions[Math.floor(Math.random() * node_questions.length)]['_id']['$oid'],
//             },
//             state,
//           ),
//         )
//       }
//     />, scegline uno dalla{' '}
//     <Link text="lista" lambda={() => set(['class_node_state', node_serial, 'show_list'], true)} /> o
//     guarda tutti gli{' '}
//     <Link
//       text="esercizi svolti"
//       lambda={() =>
//         api('/api/node_questions', { node_serial: node_serial })
//           .then(res => set(['questions'], res.questions))
//           .then(state => set(['page_state'], { page_name: 'all_questions' }, state))
//       }
//     />
//     {show_list && (
//       <ul>
//         {node_questions.map(question => (
//           <li key={question.serial}>
//             <Link
//               text={question.serial}
//               lambda={() =>
//                 set(['question_page_state'], {
//                   loaded_question: false,
//                   questionId: question['_id']['$oid'],
//                 }).then(state => set(['page_state'], { page_name: 'question' }, state))
//               }
//             />
//           </li>
//         ))}
//       </ul>
//     )}
//   </p> */}
//   // const class_node_state = (state.class_node_state && state.class_node_state[node_serial]) || {
//   //   serial: node_serial,
//   //   loaded: false,
//   // }
//   // const node_loaded = class_node_state.loaded
//   // console.log('classnodestate', class_node_state)
//   // if (node_loaded) {
//   //   const node_name = class_node_state.name
//   //   const node_questions = class_node_state.questions
//   //   const show_list = class_node_state.show_list
//   //   return (
//   //     <p>
//   //       <span className="h4">{node_name}:</span>
//   //       prova un esercizio
//   //       <Link
//   //         text="a caso"
//   //         lambda={() =>
//   //           set(['page_state'], { page_name: 'question' }).then(state =>
//   //             set(
//   //               ['question_page_state'],
//   //               {
//   //                 loaded_question: false,
//   //                 questionId: node_questions[Math.floor(Math.random() * node_questions.length)]['_id']['$oid'],
//   //               },
//   //               state,
//   //             ),
//   //           )
//   //         }
//   //       />, scegline uno dalla{' '}
//   //       <Link text="lista" lambda={() => set(['class_node_state', node_serial, 'show_list'], true)} /> o
//   //       guarda tutti gli{' '}
//   //       <Link
//   //         text="esercizi svolti"
//   //         lambda={() =>
//   //           api('/api/node_questions', { node_serial: node_serial })
//   //             .then(res => set(['questions'], res.questions))
//   //             .then(state => set(['page_state'], { page_name: 'all_questions' }, state))
//   //         }
//   //       />
//   //       {show_list && (
//   //         <ul>
//   //           {node_questions.map(question => (
//   //             <li key={question.serial}>
//   //               <Link
//   //                 text={question.serial}
//   //                 lambda={() =>
//   //                   set(['question_page_state'], {
//   //                     loaded_question: false,
//   //                     questionId: question['_id']['$oid'],
//   //                   }).then(state => set(['page_state'], { page_name: 'question' }, state))
//   //                 }
//   //               />
//   //             </li>
//   //           ))}
//   //         </ul>
//   //       )}
//   //     </p>
//   //   )
//   // } else {
//   //   api('/api/node_questions', { node_serial: node_serial }).then(res => set(['class_node_state', node_serial], {loaded:true, name:res.name, questions:res.questions}))
//   //   return <h3>...caricamento...</h3>
//   }
// }
