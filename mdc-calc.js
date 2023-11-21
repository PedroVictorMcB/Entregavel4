function calcularMDC(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return null; // Retorna null para indicar que os números não são válidos
    }

    // Calcula o MDC dos números inseridos
    return calcular(num1, num2);
}

// Função para calcular o MDC
function calcular(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

module.exports = { calcularMDC, calcular };