//
// let iter = 10;
//
// for (iter; iter >= 0; iter--) {
//     console.log(iter);
// }
//
// iter = 10;
//
// while (iter >= 0) {
//     console.log(iter);
//     iter--;
// }
//
// iter = 10;
//
// do {
//     console.log(iter);
//     iter--;
// } while (iter >= 0);

let n = 10;

console.log(`i   i^2  i^3`)
for (let i = 0; i <= n; i++) {
    if (i >= 10) {
        console.log(`${i}  ${Math.pow(i, 2)}  ${Math.pow(i, 3)}`);
    } else if (Math.pow(i, 2) >= 10) {
        console.log(`${i}   ${Math.pow(i, 2)}   ${Math.pow(i, 3)}`);
    } else {
        console.log(`${i}   ${Math.pow(i, 2)}    ${Math.pow(i, 3)}`);
    }
}

for (let i = 0; i <= 100; i++) {
    if (i == 1) {
        console.log(i);
    }
    if (i == 2) {
        console.log(i);
    }
    for (let j = 2; j < i; j++) {
        if (`${i / j}`.length == 1) {
            break;
        } else {
            if (i == j + 1) {
                console.log(i);
            }
        }
    }
}

let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}

console.log(sumEvens, sumOdds);

let randoms = '';
let alphabet = 'abcdefghijklmnopqrstuvwxyz123456789';
let sys16 = '012346789abcdef';
let r = -1;

for (let _ = 1; _ <= 6; _++) {
    r = Math.floor(Math.random() * sys16.length);
    randoms += sys16[r];
}

console.log('#' + randoms);

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
];

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
];

// let i = 0
//
// for (let country of countries) {
//     countries[i] = [country, country.slice(0, 3).toUpperCase(), country.length];
//     i++
// }
//
// console.log(countries)

let counts = [];
let j = 0;

for (let count of countries) {
    if (countries[j].includes('land')) {
        counts.push(count);
    }
    j++;
}

if (counts.length == 0) {
    console.log('Sry, but not');
}

console.log(counts);
let lets = [];

for (let c of countries) {
    if (c.slice(c.length - 2, c.length) == 'ia') {
        lets.push(c);
    }
}
for (let c of countries) {
    if (c.slice(c.length-2, c.length) == 'ai') {
        lets.push(c);
    }
}

let letsN = [];
for (let j of lets) {
    letsN.push(j.length);
}

let maximum = 0;
let index = 0;
let k = 0;
for (let j of letsN) {
    if (j > maximum) {
        maximum = j;
        index = k;
    }
    k++;
}

console.log(lets[index]);

let letItBe = [];
for (let c of countries) {
    if (c.length == 5) {
        letItBe.push(c);
    }
}

console.log(letItBe);

let maxEl = 0;
let gindex = 0;
let g = 0
for (let w of webTechs) {
    if (w.length > maxEl) {
        maxEl = w.length;
        gindex = g;
    }
    g++;
}

console.log(webTechs[gindex])
