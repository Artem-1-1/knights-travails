const squareRegistry = new Map();

const chessSquare = (x, y) => {
  const xPos = x; 
  const yPos = y; 
  let predecessor;

  const knightOffsets = [
    [1, 2], [1, -2],
    [2, 1], [2, -1],
    [-1, 2], [-1, -2],
    [-2, 1], [-2, -1]
  ]

const getPredecessor = () => predecessor;
const setPredecessor = (newPred) = { predecessor};

const name = () => `${x}, ${y}`

const createKnightMoves = () => {
  return knightOffsets.map(newSquareFrom).filter(Boolean);
}

const newSquareFrom = ([xOffset, yOffset]) => {
  const [newX, newY] = [xPos + xOffset, yPos + yOffset];
  if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
    return chessSquare(newX, newY);
  }
}

if (squareRegistry.has(name())) {
  return squareRegistry.get(name());
} else {
  const newSquare = { name, getPredecessor, setPredecessor, createKnightMoves }
  squareRegistry.set(name(), newSquare);
  return newSquare
 }
}

export const knightTravails = (start, finish) => {
  squareRegistry.clear();

  const origin = chessSquare(...start);
  const target = chessSquare(...finish);

  const queue = [target];
  while (!queue.includes(origin)) {
    const currentSquare = queue.shift();

    const enqueueList = currentSquare.createKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
  }
  const path = [origin]
  while (!path.includes(target)) {
    const nextSquare = path.at(-1).getPredecessor();
    path.push(nextSquare);
  }
  console.log(`The shortest path was ${path.length - 1} moves!`);
  console.log("The moves were:");
  path.forEach(square => console.log(square.name()));
} 