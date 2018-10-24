function* naturals() {
  let i = 0
  while (true) yield i++
}

function* range(start, end) {
  while (start < end) yield start++
}

function main() {
  const rangeIt = range(1, 4)
  const numbersIt = naturals()

  for (let n of rangeIt) console.log("number in range:", n)
  for (let n of numbersIt) console.log("infinite list of numbers:", n)
}

main()
