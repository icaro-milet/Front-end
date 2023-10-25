let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('---------------')
console.log('VERDADEIROS')
console.log('---------------')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('---------------')
console.log('FALSOS')
console.log('---------------')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('---------------')
console.log('EXPRESSÃO')
console.log('---------------')

console.log(('' || null || 0 || 3))

let nome = 'Teste'
console.log(nome || 'Desconhecido')