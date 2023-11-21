const isPrimo = require('./primo');

test('verifica se um número é primo corretamente', () => {
  // Caso de teste com número primo
  expect(isPrimo(7)).toBe(true);

  // Caso de teste com número não primo
  expect(isPrimo(10)).toBe(false);

  // Caso de teste com número inválido
  expect(isPrimo('abc')).toBe(false);
});

test('verifica se um número é primo corretamente', () => {
  // Caso de teste com número primo
  expect(isPrimo(5)).toBe(true);

  // Caso de teste com número não primo
  expect(isPrimo(15)).toBe(false);

  // Caso de teste com número inválido
  expect(isPrimo('def')).toBe(false);
});