//identifique se o número é primo ou não

function isPrimo(num) {
    const primo = [];

    for (let i = num; i > 0; i--) {
        if (num % i === 0) {
            primo.push(i);
        }
    }

    return primo.length === 2;
}

module.exports = isPrimo;