const { fakerDE } = require('@faker-js/faker');

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.finance.iban());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.airline.airplane().name)
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.finance.amount() + " Euro")
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.animal.bird())
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.person.firstName())
}


for (let i = 0; i < 10; i++) {
    console.log(fakerDE.hacker.verb())
}

console.log("this is it. 5 Segments with 10 items per segment")