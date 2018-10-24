function* intersection(iterators, comparator = (a, b) => a - b) {
  const [iteratorA, iteratorB] = iterators
  let stepA = iteratorA.next()
  let stepB = iteratorB.next()

  while (!stepA.done && !stepB.done) {
    const comparison = comparator(stepA.value, stepA.value)

    if (comparison < 0) stepA = iteratorA.next()
    else if (comparison > 0) stepB = iteratorB.next()
    else {
      yield stepA.value
      stepA = iteratorA.next()
      stepB = iteratorB.next()
    }
  }
}

function* take(n, xs) {
  let i = 0
  while (n >= i) {
    yield xs.next().value
    i++
  }
}

function toArray(it) {
  return [...it]
}

function* fibonacci() {
  let i0 = 1
  let i1 = 0

  while (true) {
    yield i0
    ;[i0, i1] = [i0 + i1, i0]
  }
}

function* primes() {
  const primes = new Set()
  yield 2

  loop: for (let i = 3; true; i += 2) {
    for (const prime of primes) {
      if (i % prime === 0) {
        continue loop
      }
    }

    primes.add(i)
    yield i
  }
}

// efficient operations between infinite sets
function main() {
  const fibonacciIt = fibonacci()
  const primesIt = primes()
  const sets = [primesIt, fibonacciIt]

  for (let n of take(10, intersection(sets))) {
    console.log("first batch:", n)
  }

  for (let n of take(4, intersection(sets))) {
    console.log("second batch:", n)
  }

  console.log("third batch as array", toArray(take(2, intersection(sets))))
}

main()
