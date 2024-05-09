
console.group('Countries');
console.table(countries);
console.groupEnd();

console.assert(10 > 2*10, 'ERROR');
console.assert(10 > 2, 'OK');

console.warn('Warning');
console.error('Error');

const food = ["beans", "rice", "plantain", "egg"];

console.time('for loop');
for (let f = 0; f<food.length; f++) {
    console.log(food[f]);
}
console.timeEnd('for loop');


console.time('while loop');
let f = 0;
while (f < food.length) {
    console.log(food[f]);
    f++;
}
console.timeEnd('while loop');


console.time('for of loop');
for (let f of food) {
    console.log(f);
}
console.timeEnd('for of loop');


console.time('for loop');
for (let f = 0; f<food.length; f++) {
    console.log(food[f]);
}
console.timeEnd('for loop');


console.time('forEach loop');
food.forEach(f => console.log(f));
console.timeEnd('forEach loop');
