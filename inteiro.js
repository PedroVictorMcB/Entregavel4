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


// guardar como modelo

// const N = 6;
// const array = [];
// let cont = 0;
// let sorted;

// function inteiroCont(N) {
//     for (let i = 0; i < N; i++) {
//         sorted = Math.floor(Math.random() * 3);
//         if (sorted == 0) {
//             sorted = Math.random().toFixed(2);
//         } else if (sorted == 1) {
//             sorted = 1;
//         }
//         array.push(sorted);
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (Number.isInteger(array[i])) {
//             cont = cont + 1;
//         }
//     }
//     return array;
// }

// module.exports = inteiroCont;

// const lista = inteiroCont(N);

// console.log(`Lista de números: ${lista}\nNúmero de inteiros: ${cont}`);