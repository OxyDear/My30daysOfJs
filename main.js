
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
text = text.replace(/,/g, '');
text = text.replace(/\./g, '');
words = text.split(' ');
console.log(words);
console.log(words.length);
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
shoppingCart.push('Sugar');
shoppingCart.splice(4, 1);
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);
if (!countries.includes('Ethiopia')) {
    countries.push('Ethiopia');
}
console.log(countries);
if (webTechs.includes('Sass')) {
    console.log('Sass is a preprocessor')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}
const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort()
console.log(ages, ages[0], ages[ages.length-1], ages[Math.floor(ages.length/2)])
console.log(countries.slice(0, 10))
console.log(countries[Math.floor(countries.length/2)])

let one = countries.slice(0, Math.ceil(countries.length/2))
let two = countries.slice(Math.ceil(countries.length/2), countries.length)
console.log(one, two)
