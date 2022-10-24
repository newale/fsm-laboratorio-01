const mainFile = require('../src/main')

const {
  filteredNumbers
} = mainFile

test('Quitar numeros multiplos de 5', () => {
  expect(filteredNumbers.length).toBe(3)
})
