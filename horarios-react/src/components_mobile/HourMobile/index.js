import React from 'react'

import './style.css'

import Subject from '../../components/Subject'

function HourMobile({ content, day, subjects, leftClick }) {
    return (
      <div id="hour-mobile-container">
         <div className="hour-mobile">
            <p>{content + "h"}</p>
         </div>
         <div className="content-mobile">
            {subjects && subjects.map(elem => (
               elem.horario.dia === day && parseInt(elem.horario.hora) === parseInt(content) && <Subject key={`${elem.disciplina}`+`${elem.turma}`} subjectData={elem} leftClick={leftClick}/>
            ))}
         </div>
      </div>
    )
}

export default HourMobile;