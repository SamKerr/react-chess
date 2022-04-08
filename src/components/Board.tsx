import { PieceType } from 'chess.js';
import React from 'react'

export type BoardType = ({
    type: PieceType,
    color: 'b' | 'w',
  } | null)[][];

type Props = {
    board: BoardType,
}

const Board = (props: Props) => {
    console.log('rendering board!')
    console.log({props})
    return (
    <div className='board'>
        {props.board.map((row, i) => {
            return <div key={i}>
                <p>{JSON.stringify(row)}</p>
            </div>
        })}
        <p></p>
    </div>
  )
}

export default Board;