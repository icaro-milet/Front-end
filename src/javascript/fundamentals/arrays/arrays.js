const values = [7, 4.5, 1.2, 8]
console.log(values)

values[10] = 49.8;
console.log(values)

values.push({id: 3}, false, 16, null, 'test')
console.log(values)

// delete the last element of array
console.log(values.pop())
delete values[0]

console.log(typeof values)