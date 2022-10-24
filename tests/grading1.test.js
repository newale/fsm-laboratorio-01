const mainFile = require('../src/main')

const {
  multiply
} = mainFile

test('Crear función que multiplique', () => {
  expect(multiply(1, 3)).toBe(3)
  expect(multiply(10, 4)).toBe(40)
  expect(multiply(-1, 1)).toBe(-1)
})
