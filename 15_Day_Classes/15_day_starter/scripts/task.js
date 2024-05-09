
class Animal {
    constructor(name, age, color, legs_properties) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs_properties = legs_properties;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs_properties, ears) {
        super(name, age, color, legs_properties);
        this.ears = ears;
    }
    Myau() {
        return 'Myau';
    }
}

class Dog extends Animal {
    Hau() {
        return 'Hau';
    }
}

class Statistics {
    constructor(ages) {
        this.ages = ages;
    }

    count() {
        return this.ages.length;
    }

    sum() {
        let sum = 0;
        this.ages.forEach((num) => (sum += num));
        return sum;
    }

    min() {
        let min = this.ages[0];
        for (let n=1; n<this.ages.length; n++) {
            if (this.ages[n]<min) {
                min = this.ages[n];
            }
        }
        return min;
    }

    max() {
        let max = this.ages[0];
        for (let n=1; n<this.ages.length; n++) {
            if (this.ages[n]>max) {
                max = this.ages[n];
            }
        }
        return max;
    }

    mean() {
        let sum = 0;
        this.ages.forEach((num) => (sum += num));
        return Math.floor(sum / this.ages.length);
    }

    range() {
        return this.max() - this.min();
    }

    median() {
        let sorted = this.ages.sort();
        return this.ages[Math.floor(sorted.length / 2)];
    }

    describe() {
        return `
        Count: ${this.count()}
        Sum: ${this.sum()}
        Min: ${this.min()}
        Max: ${this.max()}
        Range: ${this.range()}
        Mean: ${this.mean()}
        Median: ${this.median()}`;
    }
}

const stat = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(stat.describe());


class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = incomes;
        this.expenses = expenses;
    }

    get totalIncome() {
        return this.incomes;
    }

    get totalExpense() {
        return this.expenses;
    }

    set addIncome(amount) {
        this.incomes += amount;
    }

    set addExpense(amount) {
        this.expenses += amount;
    }

    profit() {
        return this.incomes - this.expenses;
    }

    accountInfo() {
        return `
        Name: ${this.firstname} ${this.lastname}
        Total Income: ${this.incomes}
        Total Expense: ${this.expenses}
        Profit: ${this.profit()}`;
    }
}


const person = new PersonAccount('Ivan', 'Potyomin', 5000, 2000);
console.log(person.accountInfo());
person.addIncome = 1000;
person.addExpense = 500;
console.log(person.accountInfo());
