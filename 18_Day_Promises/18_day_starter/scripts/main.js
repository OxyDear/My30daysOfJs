
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// const fetchData = async () => {
//     try {
//         const response = await fetch(countriesAPI);
//         const countries = await response.json();
//         for (let c of countries) {
//             let langs = [];
//             c.languages.forEach(el => langs.push(el.name));
//             console.log(c.name, c.capital, langs, c.population, c.area);
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }
//
// console.log('=============');
// fetchData();


const fetchData = async (api) => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return 1;
    }
}

console.log('=============');
function allCatsNames (cats) {
    let catNames = [];
    cats.forEach(el => catNames.push(el.name));
    return catNames;
}

function allWeights (cats) {
    let catWeights = [];
    cats.forEach(el => catWeights.push(el.weight['metric']));
    return catWeights;
}

function findMedianValue (weights) {
    let amount = 0;
    let sum = 0;
    for (let w of weights) {
        let n = 2;
        let lastDigit = w[w.length-1];
        let firstDigit = w[0];
        while (n!==0) {
            if (/\d/.test(w[w.length-n])) {
                lastDigit = w.slice(w.length-n);
                n++;
            } else {
                n = 0;
            }
        }
        n = 1
        while (n!==0) {
            if (/\d/.test(w[n])) {
                firstDigit = w.slice(0, n+1);
                n++;
            } else {
                n = 0;
            }
        }
        let value = (parseInt(lastDigit) + parseInt(firstDigit))/2;
        sum+=value;
        amount++;
    }
    return Math.round(sum/amount*10)/10;
}

function findAllNamesCountries (countries) {
    let areasNames = {};
    countries.forEach(el => areasNames[el.area] = el.name)
    return Object.values(areasNames).reverse().slice(4, 14);
}

function returnData (api) {
    return new Promise((resolve, reject) => {
        resolve(fetchData(api));
        reject('fail');
    })
}

returnData(catsAPI)
    .then(res => console.log(findMedianValue(allWeights(res))))
    .catch(err => console.log(err));

returnData(countriesAPI)
    .then(res => console.log(findAllNamesCountries(res)))
    .catch(err => console.log(err));

const json = JSON.stringify(data, undefined, 4)
console.log(json)
// iso639_1
let allLanguages = [];
JSON.parse(json, (key, value) => {
    if (value.hasOwnProperty('languages')) {
        value.languages.forEach(lang => {
            if (!allLanguages.includes(lang.name)) {allLanguages.push(lang.name);}
        })
        return value;
    } else {
        return value
    }
})
console.log(allLanguages);


// const value = fetchData(catsAPI);
// console.log(allCatsNames(value));
