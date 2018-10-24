const { toExpensiveTask } = require("./utils")

const calculateExpensiveCode = toExpensiveTask(
  time => `${time}-${Date.now()}`,
  3000
)

function* factorial() {
  let fact = 1
  let i = 1
  while (true) {
    fact = fact * i
    i++
    yield fact
  }
}

function* createCodes() {
  const start = Date.now()
  while (true) {
    yield calculateExpensiveCode(start)
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
// infinite list batching
function batchDemo() {
  const codes = createCodes()
  for (let code of take(4, codes)) console.log("code for te user:", 1, code)
  for (let code of take(4, codes)) console.log("code for te user:", 2, code)
  for (let code of take(10, codes)) console.log("code for te user:", 3, code)
}

// travel structures efficiently
function* perimeter(xs) {
  const first = xs[0]
  const last = xs[xs.length - 1]
  for (let i = 0; i < first.length; i++) yield first[i] // right
  for (let i = 1; i < xs.length; i++) yield xs[i][xs[i].length - 1] // down
  for (let i = last.length - 2; i >= 0; i--) yield last[i] // left
  for (let i = xs.length - 2; i > 0; i--) yield xs[i][0] // up
}

function traverseDemo() {
  const cube = [
    [1, 2, 3, 4],
    [12, "x", "x", 5],
    [11, "x", "x", 6],
    [10, 9, 8, 7]
  ]

  for (let point of perimeter(cube)) console.log("cube perimeter:", point)

  const factorialSequence = factorial()
  const factorialCube = [
    toArray(take(4, factorialSequence)),
    toArray(take(4, factorialSequence)),
    toArray(take(4, factorialSequence)),
    toArray(take(4, factorialSequence))
  ]

  for (let n of perimeter(factorialCube)) console.log("factorial perimeter", n)
}

batchDemo()
traverseDemo()
