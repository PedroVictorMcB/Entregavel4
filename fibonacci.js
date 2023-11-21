// faça uma sequência fibonacci com um número N

const n = 5;

function fibonacci(n) {
    const fibo = [0, 1];

    for (let i = 2; i <= n; i++) {
        const soma = fibo[i - 1] + fibo[i - 2];
        fibo.push(soma);
    }

    return fibo;
}

module.exports = fibonacci;