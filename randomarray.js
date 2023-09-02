//Generate 100 random numbers 1-50
const array = []
for (let i = 0; i < 100; i++) {
    const random_number = Math.round((Math.random() * 50) + 1);
    array.push(random_number) 
}

console.log(array)