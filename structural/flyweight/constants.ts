export type PieceType = 
 'rook'
 | 'knight'
 | 'bishop'
 | 'queen'
 | 'king'
 | 'pawn';


 export type Color = 'white' | 'black';

 export interface Position {
  x: number;
  y: number;
 }