const weight = 1.0
const weight2 = Number('2.0')

console.log(weight, weight2)

console.log(typeof weight)
console.log(typeof weight2)

console.log('-----------------------------------------')

console.log(Number.isInteger(weight))
console.log(Number.isInteger(weight2))

console.log('-----------------------------------------')

const testOne = 9.871
const testTwo = 6.349

const total = (testOne * weight) + (testTwo * weight2)
const avarage = total / (weight + weight2)

console.log(avarage.toFixed(2))
console.log(avarage.toString(2)) //binary
console.log(typeof avarage)
console.log(typeof Number)