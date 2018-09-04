// BEGIN
const makeQueen = (col, row) => cons(col, row);

const isOnSameRow = (queen1, queen2) => cdr(queen1) === cdr(queen2);

const isOnSameDiagonal = (queen1, queen2) => {
  const row1 = cdr(queen1);
  const row2 = cdr(queen2);
  const col1 = car(queen1);
  const col2 = car(queen2);
  return Math.abs(row1 - row2) === Math.abs(col1 - col2);
};

const isSafeQueen = (queen, otherQueens) => {
  const iter = (queens, col) => {
    if (isEmpty(queens)) {
      return true;
    }

    const row = head(queens);
    const nextQueen = makeQueen(col, row);
    const restQueens = tail(queens);
    return (isOnSameRow(queen, nextQueen) || isOnSameDiagonal(queen, nextQueen)) ?
      false : iter(restQueens, col + 1);
  };

  const startColumnPosition = car(queen) + 1;
  return iter(otherQueens, startColumnPosition);
};

export default (queenPositions) => {
  const iter = (positions, col) => {
    if (isEmpty(positions)) {
      return true;
    }

    const currentQueen = makeQueen(col, head(positions));
    const restRows = tail(positions);
    return isSafeQueen(currentQueen, restRows) ? iter(restRows, col + 1) : false;
  };

  const startColumnPosition = 1;
  return iter(queenPositions, startColumnPosition);
};
// END

// Version 2
const check = (list, base, i = 1) => {
    if (isEmpty(list)) return true
    const current = head(list)
    if (current === base || current + i === base || current - i === base) return false
    else return check(tail(list), base, i + 1)
  }

export default list => {
  const iter = list => {
    if (isEmpty(list)) return true
    const currentQueen = head(list)
    const rest = tail(list)
    if (check(rest, currentQueen)) return iter(rest) 
    else return false
  }
  return iter(list)
}
