// verifique se o número é inteiro ou não

const array = [0.1, 2, 3.8, 9.8, 6, 10];
let cont = 0;

function inteiroCont(array) {
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            cont = cont + 1;
        }
    }
    return cont;
}

module.exports = inteiroCont;

const numInts = inteiroCont(array);

console.log(`Lista de números: ${array}\nNúmero de inteiros: ${numInts}`);