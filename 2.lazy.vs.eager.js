const { toExpensiveTask } = require("./utils")
const calculateExpensiveNumber = toExpensiveTask(n => n, 3000)

function eagerRange(start, end) {
  const result = []
  while (start < end) {
    let number = calculateExpensiveNumber(start++)
    result.push(number)
  }
  return result
}

function* lazyRange(start, end) {
  while (start < end) {
    yield calculateExpensiveNumber(start++)
  }
}

function eagerDemo() {
  console.log("start")
  console.time("eagerRange")
  const numbers = eagerRange(1, 5)
  console.timeEnd("eagerRange")
  console.log("end")
  for (let n of numbers) console.log(n)
}

function lazyDemo() {
  console.log("start")
  console.time("lazyRange")
  const numbers = lazyRange(1, 5)
  console.timeEnd("lazyRange")
  console.log("end")
  for (let n of numbers) console.log(n)
}

eagerDemo()
lazyDemo()
