// iterator
function range(start, end) {
  return {
    next: () => {
      return {
        value: start++,
        done: start > end
      }
    }
  }
}

// iterable
function rangeAsIterable(start, end) {
  return {
    [Symbol.iterator]: () => range(start, end)
  }
}

function main() {
  const rangeIterator = range(1, 4)
  for (let n of rangeAsIterable(1, 4)) console.log(n)

  // console.log(rangeAsIterable(1, 4), [...rangeAsIterable(1, 4)])
}

main()
