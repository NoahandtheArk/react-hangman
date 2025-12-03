// Keyboard
// Renders clicked letter buttons using .map()

import React from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Keyboard({ onGuess, disabledLetters, gameStatus }) {
  return (
    <div className="keyboard d-flex flex-wrap justify-content-center">
      {letters.map(letter => (
        <button
          key={letter}
          className={`m-1 btn ${disabledLetters.has(letter) ? 'btn-secondary' : 'btn-outline-dark'}`}
          onClick={() => onGuess(letter)}
          disabled={disabledLetters.has(letter) || gameStatus !== 'playing'}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}