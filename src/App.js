// Main Logic

import React, { useState, useEffect } from 'react';
import { wordList } from './words';
import GameBoard from './components/GameBoard';
import GameStatus from './components/GameStatus';
import HelpModal from './components/HelpModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hangman.css';

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [showHelp, setShowHelp] = useState(false);

  const maxWrongGuesses = 10;

  // Initializes a new game
  const startNewGame = () => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    setWord(randomWord);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setGameStatus('playing');
  };

  useEffect(() => {
    if (word === '') return;
  
    const uniqueLetters = new Set(word).size;
    const correctGuesses = [...guessedLetters].filter(letter => word.includes(letter)).length;
  
    if (correctGuesses === uniqueLetters) {
      setGameStatus('won');
    } else if (wrongGuesses >= maxWrongGuesses) {
      setGameStatus('lost');
    }
  }, [guessedLetters, wrongGuesses, word]);

  // Handles the letter guess
  const handleGuess = (letter) => {
    if (guessedLetters.has(letter) || gameStatus !== 'playing') return;

    const newGuessed = new Set(guessedLetters);
    newGuessed.add(letter);
    setGuessedLetters(newGuessed);

    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  // Initializes on first load
  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className="App container py-4">
      <h1 className="text-center mb-4">Hangman Game</h1>

      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-outline-secondary" onClick={() => setShowHelp(true)}>
          📚 Help
        </button>
        <button className="btn btn-outline-primary" onClick={startNewGame}>
          Restart Game
        </button>
      </div>

      <GameBoard
        word={word}
        guessedLetters={guessedLetters}
        wrongGuesses={wrongGuesses}
        onGuess={handleGuess}
        gameStatus={gameStatus}
      />

      <GameStatus status={gameStatus} targetWord={word} />

      <HelpModal show={showHelp} handleClose={() => setShowHelp(false)} />
    
        {/* Footer */}
        <footer className="mt-5 pt-3 border-top text-center text-muted">
        <p>🎮 Designed & built by <strong>Noah and the Ark</strong> | React Hangman Capstone Project</p>
      </footer>
    </div>
  );
}

export default App;