function formingMagicSquare(squareMatrix) {
  const squareMatrixFlatten = squareMatrix.reduce((allRows, row) => allRows.concat(row), [])

  const possibleMagicSquares = [
     [8, 1, 6, 3, 5, 7, 4, 9, 2],
     [4, 3, 8, 9, 5, 1, 2, 7, 6],
     [2, 9, 4, 7, 5, 3, 6, 1, 8],
     [6, 7, 2, 1, 5, 9, 8, 3, 4],
     [6, 1, 8, 7, 5, 3, 2, 9, 4],
     [8, 3, 4, 1, 5, 9, 6, 7, 2],
     [4, 9, 2, 3, 5, 7, 8, 1, 6],
     [2, 7, 6, 9, 5, 1, 4, 3, 8],
   ];

  return possibleMagicSquares.reduce((cost, aPossibleMagicSquare) => {
    const currCost = aPossibleMagicSquare.reduce((sum, magicSquareItem, index) => {
      return sum + Math.abs(magicSquareItem - squareMatrixFlatten[index])
    }, 0)

    return Math.min(currCost, cost)
  }, Infinity)

 return cost
}

describe('Forming Magic Square', () => {
  it('sample one', () => {
    const result = formingMagicSquare([
      [5, 3, 4], [1, 5, 8], [6, 4, 2]
    ])

    expect(result).toEqual(7)
  })
})
