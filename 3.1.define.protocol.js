ITERATOR_PROTOCOL = "@@iterator"

function forOf(f, xs) {
  const getIterator = xs[ITERATOR_PROTOCOL]
  const iterator = getIterator()
  let data = iterator.next()
  while (!data.done) {
    f(data.value)
    data = iterator.next()
  }
}

function iterable(values) {
  let i = 0
  const myIterable = {
    [ITERATOR_PROTOCOL]: () => {
      return {
        next: () => {
          value = values[i]
          i++
          return {
            value: value,
            done: i > values.length
          }
          i++
        }
      }
    }
  }
  return myIterable
}

function main() {
  forOf(n => console.log(n), iterable([1, 2, 3]))
  //for (let n of iterable([1, 2, 3])) console.log(n)
}

main()
