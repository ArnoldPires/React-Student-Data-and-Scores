import React, { useState } from 'react';
import Student from './components/Students';
import './App.css';

const App = () => {
  const [studentData] = useState({
    students: [
      {
    name: 'Arnaldo Pires',
    bio: 'A fearless juggler of flaming marshmallows, has a secret talent for interpretive llama dancing and master of origami. He can fold paper airplanes that can loop through dimensions.',
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'Sarah Moffatt',
    bio: "Sarah's cat speaks fluent French. She is also a master of underwater basket weaving and dreams of opening a bakery for squirrels. Her greatest achievement? Teaching a hamster to moonwalk across a tightrope.",
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Michelle King',
    bio: "A intergalactic donut connoisseur, believes that aliens stole her left sock for a cosmic dance-off. In her part time, she is a detective investigating the mysterious case of disappearing socks.",
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  },
  {
    name: 'Prince-Jordan Pires',
    bio: "Prince-Jordan, the time-traveling synchronized swimmer, once hosted a tea party for dinosaurs. He's learning to speak fluent butterfly and plans to write a novel about quantum puddle jumping.",
    scores: [
      {
        date: '2018-10-17',
        score: 6
      },
      {
        date: '2018-11-24',
        score: 99
      },
      {
        date: '2018-12-19',
        score: 89
      }
    ]
  }
    ]
  });
  return (
    <section className='App'>
      {studentData.students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </section>
  )
}
export default App
