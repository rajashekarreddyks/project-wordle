import React from 'react';

export default function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={index}>{guess}</p>
      ))}
    </div>
  );
}