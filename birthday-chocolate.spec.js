function birthday(chocolateBar, day, month) {
  const expectedSum = day
  const expectedNumberOfPiece = month
  let numberOfWays = 0

  for (let barIndex = 0; barIndex < chocolateBar.length - (expectedNumberOfPiece - 1); barIndex++) {
    let sum = chocolateBar[barIndex]

    for (let indexAhead = 1; indexAhead < expectedNumberOfPiece; indexAhead++) {
      sum += chocolateBar[barIndex + indexAhead]
    }

    if(sum === expectedSum) {
      numberOfWays++
    }
  }

  return numberOfWays
}

describe('birthday chocolate', () => {
  it('sample one', () => {
    const result = birthday([2,2,1,3,2], 4, 2)

    expect(result).toEqual(2)
  })

  it('sample two', () => {
    const result = birthday([1,2,1,3,2], 3, 2)

    expect(result).toEqual(2)
  })

  it('sample three', () => {
    const result = birthday([1,1,1,1,1,1], 3, 2)

    expect(result).toEqual(0)
  })

  it('sample four', () => {
    const result = birthday([4], 4, 1)

    expect(result).toEqual(1)
  })

  it('sample five', () => {
    const result = birthday([1, 2, 2, 2], 6, 3)

    expect(result).toEqual(1)
  })
})
