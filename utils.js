function sleep(milliseconds) {
  const start = new Date().getTime()
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break
    }
  }
}

function toExpensiveTask(f, t) {
  return (...args) => {
    sleep(t)
    return f(...args)
  }
}

module.exports = {
  sleep,
  toExpensiveTask
}
