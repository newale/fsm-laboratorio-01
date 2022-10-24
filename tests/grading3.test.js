const mainFile = require('../src/main')

const {
  tripledNumbers
} = mainFile

[2,4,6,7]
test('Crear arreglo con 5 valores numeros', () => {
  expect(tripledNumbers[0]).toBe(6)
  expect(tripledNumbers[0]).toBe(12)
  expect(tripledNumbers[0]).toBe(18)
  expect(tripledNumbers[0]).toBe(21)
})
