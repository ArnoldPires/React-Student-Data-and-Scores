import React from 'react';

const Score = ({ score }) => {
  return (
    <section className='score'>
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </section>
  )
}
export default Score;