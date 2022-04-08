import { BehaviorSubject } from "rxjs";
import { Chess } from 'chess.js';

const chessJsInstance = new Chess();
// components can subscribe to this instance and recieve updates
// when the fields update
export const gameSubject = new BehaviorSubject({
    board: chessJsInstance.board(),
})