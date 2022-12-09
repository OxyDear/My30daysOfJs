
let fn = 'Ivan'
let ln = 'Potyomin'
let cy = 'Belarus'
let cty = 'Baran'
let ae = 16
let isM = false

console.log(10 === '10')
console.log(parseInt(`9.8`) == 10)
console.log(10 == '10')
console.log(typeof 'Hi' == typeof 'Hello')
console.log(4 >= 3)

console.log(4 <= 3)
console.log(5 === '5')
console.log(5 + 5 < 10)

console.log(typeof fn,
    typeof ln,
    typeof cy,
    typeof cty,
    typeof ae,
    typeof isM)

console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log(4 === '4') // false
console.log(!('python'.match(/on/gi) && 'dragon'.match(/on/gi))) // false

let date = new Date()
console.log(date.getFullYear()) // year
console.log(date.getMonth()) // month
console.log(date.getDate()) // date of month
console.log(date.getDay()) // day
console.log(date.getHours()) // hours
console.log(date.getMinutes()) // minutes
console.log(date.getTime()) // time

// let ager = parseInt(prompt('How old are you?'))
// ager >= 18
//     ? console.log('Ok')
//     : console.log('Not Ok')

console.log(`${date.getFullYear().toString().substring(1, 4)}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`)
