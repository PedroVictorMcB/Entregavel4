//faça a soma de um conjunto de números n

const n = 4;

function soma(n) {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma = soma + i;
    }

    return soma;
}

module.exports = soma;