import React from 'react';
import Score from './Score';

const Student = ({ student }) => {
  return (
    <section className='student'>
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <div className='scores'>
        {student.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </div>
    </section>
  )
}
export default Student;