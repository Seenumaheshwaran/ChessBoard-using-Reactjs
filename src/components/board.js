import React from 'react';
import '../components/board.css'
function Chessboard(){
    const rows = [];
  for (let i = 8; i >= 1; i--) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const color = (i + j) % 2 === 0 ? 'white' : 'black';
      let piece = ''; 

      if (i === 2) { 
        piece ='\u265F';
      } else if (i === 7) {
        piece =  '\u2659';
      } else if (i === 1) { 
        if (j === 0 || j === 7) piece = '\u265C';
        else if (j === 1 || j === 6) piece = '\u265E';
        else if (j === 2 || j === 5) piece = '\u265D';
        else if (j === 3) piece = '\u265B';
        else if (j === 4) piece = '\u265A';
      } else if (i === 8) { 
        if (j === 0 || j === 7) piece = '\u2656';
        else if (j === 1 || j === 6) piece = '\u2658';
        else if (j === 2 || j === 5) piece = '\u2657';
        else if (j === 3) piece = '\u2655';
        else if (j === 4) piece = '\u2654';
      }
      row.push(<div className={`square ${color}`}>{piece}</div>);
    }
    rows.push(<div className="row">{row}</div>);
  }

  return (
    <div className="chessboard">
      <div className="board">
      {rows}
      </div>
    </div>
  );
}
export default Chessboard;