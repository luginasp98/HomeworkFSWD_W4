//Divide number by index criteria (Odd or Even)
const filled_array = [24, 32, 37, 27, 22, 47, 6, 28, 1, 39, 44, 27, 2, 28, 11, 20, 31, 25, 26, 17, 6, 39, 43, 49, 29, 7, 47, 30, 37, 34, 20, 5, 2, 15, 42, 16, 2, 26, 38, 41, 48, 30, 17, 5, 14, 35, 45, 41, 48, 10, 38, 28, 25, 7, 34, 13, 21, 20, 40, 42,21, 5, 31, 39, 26, 10, 17, 23, 37, 22, 16, 22, 46, 20, 41, 29, 50, 2, 37, 38, 35, 4, 41, 4, 40, 25, 43, 14, 5, 9, 4, 29, 24, 20, 11, 48, 17, 22, 26, 19]
const odd_array = []
const even_array = []

for (let i = 0; i < filled_array.length; i++) {
    if (i % 2 == 0) {
        even_array.push(filled_array[i])
    } else {
        odd_array.push(filled_array[i])
    }
}

console.log("array genap", even_array)
console.log("array ganjil", odd_array)