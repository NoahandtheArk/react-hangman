// Using images - Hangman Figures

import React from 'react';

export default function HangmanFigure({ wrongGuesses }) {
  // wrongGuesses ranges from 0 to 10 → image index = wrongGuesses + 1 (1 to 11)
  const stage = Math.min(wrongGuesses + 1, 11);

  return (
    <div className="hangman-figure text-center">
      <img
        src={`/hangman/state${stage}.gif`}
        alt={`Hangman stage ${stage}`}
        style={{ width: '100%', maxWidth: '250px', height: 'auto' }}
        onError={(e) => {
        }}
      />
    </div>
  );
}