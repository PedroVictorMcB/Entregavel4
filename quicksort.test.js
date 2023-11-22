const quicksort = require('./quicksort');

let aux1 = [3, 9, -4, 20, -7, -1, 0, 5];
let aux2 = [9, 10, -23, 17, 3, -15, -5, 7];
const desordedNums1 = [];
const desordedNums2 = [];
let ordedNums1 = [];
let ordedNums2 = [];

for (let i = 0; i < aux1.length; i++) {
    desordedNums1.push(parseInt(aux1[i]));
}

for (let i = 0; i < aux2.length; i++) {
    desordedNums2.push(parseInt(aux2[i]));
}

test(`${aux1} espera ser ${ordedNums1 = quicksort(desordedNums1)}`, () => {
    expect(ordedNums1 = quicksort(desordedNums1)).toEqual(ordedNums1);
})

test(`${aux2} espera ser ${ordedNums2 = quicksort(desordedNums2)}`, () => {
    expect(ordedNums2 = quicksort(desordedNums2)).toEqual(ordedNums2);
})