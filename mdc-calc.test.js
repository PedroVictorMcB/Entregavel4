const { calcularMDC, calcular } = require('./mdc-calc');

test('calcula o MDC corretamente', () => {
  // Caso de teste com números inteiros
  expect(calcularMDC(12, 18)).toBe(6);

  // Caso de teste com um número inválido
  expect(calcularMDC(10, 'abc')).toBeNull();
});

test('calcula corretamente quando um número é zero', () => {
  expect(calcularMDC(0, 8)).toBe(8);
  expect(calcularMDC(12, 0)).toBe(12);
});
