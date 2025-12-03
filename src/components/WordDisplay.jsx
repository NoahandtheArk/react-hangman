// Word Display
import React from 'react';

export default function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display mb-4">
      {word.split('').map((letter, index) => (
        <span key={index} className="letter-box mx-1">
          {guessedLetters.has(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}