const mainFile = require('../src/main')

const {
  tripledNumbers
} = mainFile

test('Crear nuevo arreglo, elementos multiplicados por 3', () => {
  expect(tripledNumbers[0]).toBe(6)
  expect(tripledNumbers[1]).toBe(12)
  expect(tripledNumbers[2]).toBe(18)
  expect(tripledNumbers[3]).toBe(21)
})
