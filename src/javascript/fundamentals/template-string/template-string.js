const nome = 'Icaro'
const concat = 'Hello ' + nome + '!'
const template = `
                    Olá
                    ${nome}`
console.log(concat, template)

//expressions
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()
console.log(`Hey ${up('danger')}`)