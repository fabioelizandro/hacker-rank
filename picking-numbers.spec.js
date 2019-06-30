function pickingNumbers(listOfNumbers) {
  const { biggest } = listOfNumbers.sort((a, b) => a - b).reduce(({ last, parcial, biggest }, number) => {
    if(number - last <= 1) {
      return { last, parcial: parcial + 1, biggest: Math.max(parcial + 1, biggest) }
    }

    return { last: number, parcial: 1, biggest };
  }, { last: -Infinity, parcial: 0, biggest: 0 })

  return biggest
}

describe('Picking Numbers', () => {
  it('sample one', () => {
    const result = pickingNumbers([
      1,1,2,2,4,4,5,5,5
    ])

    expect(result).toEqual(5)
  })

  it('sample two', () => {
    const result = pickingNumbers([
      4,6,5,3,3,1
    ])

    expect(result).toEqual(3)
  })

  it('sample tree', () => {
    const result = pickingNumbers([
      7,12,13,19,17,7,3,18,9,18,13,12,3,13,7,9,18,9,18,9,13,18,13,13,18,18,17,
      17,13,3,12,13,19,17,19,12,18,13,7,3,3,12,7,13,7,3,17,9,13,13,13,12,18,18,
      9,7,19,17,13,18,19,9,18,18,18,19,17,7,12,3,13,19,12,3,9,17,13,19,12,18,13,
      18,18,18,17,13,3,18,19,7,12,9,18,3,13,13,9,7
    ])

    expect(result).toEqual(30)
  })
})
