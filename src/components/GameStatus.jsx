// Game Status
import React from 'react';

export default function GameStatus({ status, targetWord }) {
  if (status === 'won') {
    return <div className="alert alert-success mt-4 text-center">🎉 🏆 Congradulations You won! The word was: {targetWord}</div>;
  }
  if (status === 'lost') {
    return <div className="alert alert-danger mt-4 text-center">💀 Game over! The word was: {targetWord}</div>;
  }
  return null;
}