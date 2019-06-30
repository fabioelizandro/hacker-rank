function organizingContainers(containers) {
  const length = containers.length

  let countX = new Array(length).fill(0)
  let countY = new Array(length).fill(0)

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      countY[y] += containers[x][y]
      countX[x] += containers[x][y]
    }
  }

  if (countX.sort((a, b) => a - b).toString() === countY.sort((a, b) => a - b).toString()) {
    return 'Possible'
  } else {
    return 'Impossible'
  }
}

describe('Organize Container', () => {
  it('sample one', () => {
    const result = organizingContainers([[1,1],[1,1]])

    expect(result).toEqual('Possible')
  })

  it('sample two', () => {
    const result = organizingContainers([
      [0, 2, 1],
      [1, 1, 1],
      [2, 0, 0],
    ])

    expect(result).toEqual('Possible')
  })

  it('sample three', () => {
    const result = organizingContainers([
      [1, 3, 1],
      [2, 1, 2],
      [3, 3, 3],
    ])

    expect(result).toEqual('Impossible')
  })
})
