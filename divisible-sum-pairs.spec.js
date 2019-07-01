function divisibleSumPairs(length, divideSum, array) {
  let sum = 0

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((array[i] + array[j]) % divideSum === 0) sum++;
    }
  }

  return sum
}

describe('divisible sum paris', () => {
  it('sample one', () => {
    const result = divisibleSumPairs(6, 3, [1,3,2,6,1,2])
    expect(result).toEqual(5)
  })
})
