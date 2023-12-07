function calcularMDC(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return null; 
    }

    return calcular(num1, num2);
}

function calcular(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

module.exports = { calcularMDC, calcular };