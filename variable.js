
// let yourAge = parseInt(prompt('Enter your age: '))
// let friendAge = parseInt(prompt('Enter your friend age: '))

// if (yourAge > friendAge) {
//     console.log(`You are ${yourAge-friendAge} years older than friend.`)
// } else if (yourAge == friendAge) {
//     console.log(`You are the same age`)
// } else {
//     console.log(`You are ${friendAge-yourAge} years younger than friend.`)
// }

let a = 4
let b = 3

// if (a > b) {
//     console.log(`${a} is greater than ${b}`)
// } else if (a == b) {
//     console.log(`${a} is equal ${b}`)
// } else {
//     console.log(`${b} is greater than ${a}`)
// }

// a > b
//   ? console.log(`${a} is greater than ${b}`)
//   : a < b
//       ? console.log(`${a} is greater than ${b}`)
//       : console.log(`${a} is equal ${b}`)

// if (a % 2 == 0) {
//     console.log(`${a} is an even number`)
// } else {
//     console.log(`${a} is an odd number`)
// }

let grade = 100

// if (grade >= 80) {
//     console.log('A')
// } else if (grade >= 70) {
//     console.log('B')
// } else if (grade >= 60) {
//     console.log('C')
// } else if (grade >= 50) {
//     console.log('D')
// } else {
//     console.log('F')
// }

let month = undefined

try {
    let month = prompt('What is the month today?').toLowerCase()
} catch (TypeError) {
    console.log('Ok')
}

switch (month) {
    case 'september':
        console.log('September has 30 days.')
        break
    case 'october':
        console.log('October has 31 days.')
        break
    case 'november':
        console.log('November has 30 days.')
        break
    case 'december':
        console.log('December has 31 days.')
        break
    case 'january':
        console.log('January has 31 days.')
        break
    case 'february':
        let vis = prompt('Is it a leap year?')
        if (vis == 'yes') {
            console.log('February has 29 days.')
        } else {
            console.log('February has 28 days.')
        }
        break
    case 'march':
        console.log('March has 31 days.')
        break
    case 'april':
        console.log('April has 30 days.')
        break
    case 'may':
        console.log('May has 31 days.')
        break
    case 'june':
        console.log('January has 30 days.')
        break
    case 'july':
        console.log('July has 31 days.')
        break
    case 'august':
        console.log('August has 31 days.')
}
