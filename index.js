function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function increment(n) {
    return (n = n + 1);
}

function decrement(n) {
    return n = (n - 1)
}

function makeInt(n) {
    n = parseInt(n, 10)
    return n
}

// console.log(makeInt('24.5'))
// console.log(makeInt('sup'))

function preserveDecimal(n) {
    n = parseFloat(n)
    return n
}

// console.log(makeInt('24.5'))
// console.log(makeInt('sup'))


