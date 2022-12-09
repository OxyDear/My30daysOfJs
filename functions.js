
function getName(name, lastname) {
    return name + ' ' + lastname
}

function areaRect(length, width) {
    return length * width
}

function perimeterRect(length, width) {
    return 2 * (length + width)
}

function getVolume(length, width, height) {
    return length * width * height
}

function getAreaCircle(radius) {
    const PI = 3.14
    return PI * radius * radius
}

function getCircumference(radius) {
    const PI = 3.14
    return 2 * PI * radius
}

function getDensity(mass, volume) {
    return mass / volume
}

function getSpeed(distance, time) {
    return distance / time
}

function getWeight(mass) {
    const gravity = 9.81
    return mass * gravity
}

function convertCelsiusToFahrenheit(temperature) {
    return (temperature * 4.5) + 32
}

function getBMI(weight, height) {
    let bmi = weight / (height * height)

    if (bmi < 18.5) {
        return 'Underweight'
    } else if (18.5 <= bmi < 25) {
        return 'Normal Weight'
    } else if (25 <= bmi < 30) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}

function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

function solveLinEquation(a, b, c, y) {
    return -(b * y + c) / a
}

function printArray(mas) {
    for (let element of mas) {
        console.log(element)
    }
}

function showDateTime() {
    let date = new Date()
    return `${date.getFullYear().toString().substring(1, 4)}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}

function getRandomRgb() {
    return `rbg(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function isPrime(number) {
    for (let j = 2; j < number; j++) {
        if (`${number / j}`.length == 1) {
            return false;
        } else {
            if (number == j + 1) {
                return true
            }
        }
    }
}

console.log(getName('Ivan', 'Potyomin'))
console.log(areaRect(2, 4))
console.log(perimeterRect(2, 4))
console.log(getVolume(2, 4, 3))
console.log(getAreaCircle(10))
console.log(getCircumference(10))
console.log(getDensity(100, 0.1))
console.log(getSpeed(100, 20))
console.log(getWeight(1))
console.log(convertCelsiusToFahrenheit(0))
console.log(getBMI(54, 1.74))
console.log(findMax(0, -10, -2))
console.log(solveLinEquation(2, 3, 4, 5))
printArray([0, 1, 2, 3])
console.log(showDateTime())
console.log(getRandomRgb())
console.log(isPrime(7))
