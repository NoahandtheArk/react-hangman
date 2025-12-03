// GameBoard
import React from 'react';
import HangmanFigure from './HangmanFigure'
import WordDisplay from './WordDisplay';
import Keyboard from './Keyboard';

export default function GameBoard({ word, guessedLetters, wrongGuesses, onGuess, gameStatus }) {
  return (
    <div className="game-board row">
      <div className="col-md-6 text-center">
        <HangmanFigure wrongGuesses={wrongGuesses} />
      </div>
      <div className="col-md-6">
        <WordDisplay word={word} guessedLetters={guessedLetters} />
        <Keyboard onGuess={onGuess} disabledLetters={guessedLetters} gameStatus={gameStatus} />
      </div>
    </div>
  );
}