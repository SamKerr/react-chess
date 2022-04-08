import { PieceType } from 'chess.js';
import React, { useEffect, useState } from 'react';
import { gameSubject } from '../chess/Game';
import Board, { BoardType } from '../components/Board';
import './App.css';



function App() {
  const [board, setBoard] = useState<BoardType>([])

  useEffect(() => {
    // subscribe to game subject and update board state
    const subscription = gameSubject.subscribe(
      game => setBoard(game.board)
    ) 
  
    return () => {
      // unsubscribe from game subject
      subscription.unsubscribe();
    }
  }, [])
  
  return (
    <div className="App">
      <Board board={board}/>
    </div>
  );
}

export default App;
