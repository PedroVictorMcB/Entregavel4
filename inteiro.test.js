const intFinder = require('./inteiro-finder');

test(`Teste de identificador de inteiros`, () => {
    const array = [0.1, 2, 3.8, 9.8, 6, 10];
    const intExpected = [2, 6, 10];
    expect(intFinder(array)).toEqual(intExpected);
});

test(`Teste de identificador de inteiros`, () => {
    const array = [1, 2, 3.8, 9.8, 6, 10];
    const intExpected = [1, 2, 6, 10];
    expect(intFinder(array)).toEqual(intExpected);
});