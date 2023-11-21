const fibonacci = require('./fibonacci');

test(`Sequência fibonacci teste.`, () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test(`Sequência fibonacci teste.`, () => {
    expect(fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
});