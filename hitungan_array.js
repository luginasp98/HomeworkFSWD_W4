const odd_array = [24, 37, 22, 6, 1, 44,  2, 11, 31, 26, 6,
    43, 29, 47, 37, 20, 2, 42, 2, 38, 48, 17,
    14, 45, 48, 38, 25, 34, 21, 40, 21, 31, 26,
    17, 37, 16, 46, 41, 50, 37, 35, 41, 40, 43,
    5, 4, 24, 11, 17, 26]

const even_array = [32, 27, 47, 28, 39, 27, 28, 20, 25, 17, 39,
    49, 7, 30, 34, 5, 15, 16, 26, 41, 30, 5,
    35, 41, 10, 28, 7, 13, 20, 42, 5, 39, 10,
    23, 22, 22, 20, 29, 2, 38, 4, 4, 25, 14,
    9, 29, 20, 48, 22, 19]

//Membuat fungsi nilai min dan mencari nilai min dari kedua array   
function Min(array) { 
    let min = array[0] 
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
        min = array[i]
        }
    } return min
}
      
console.log("nilai minimum genap:", Min(even_array))
console.log("nilai minimum ganjil:", Min(odd_array))


//Membuat fungsi nilai max dan mencari nilai max dari kedua array
function Max(array) { 
    let max = array[0] 
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
        max = array[i]
        }
    } return max
}   

console.log("nilai maksimum genap:", Max(even_array))
console.log("nilai maksimum ganjil:", Max(odd_array))


//Membuat fungsi total array
function Total(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i] 
    } return total
}

console.log("total array genap:", Total(even_array))
console.log("total array ganjil:", Total(odd_array))


//Membuat fungsi rata-rata array
function Average(array) {
    return Total(array) / array.length
}

console.log("rata-rata array genap:", Average(even_array))
console.log("rata-rata array ganjil:", Average(odd_array))


//Membuat fungsi perbandingan
function Compare(evenarray, oddarray) {
    return evenarray > oddarray ? "LEBIH BESAR dari" : evenarray < oddarray ? "LEBIH KECIL dari" : "Sama besarnya dengan"
}

console.log("Nilai minimum array genap", Compare(Min(even_array), Min(odd_array)), "array ganjil")
console.log("Nilai maksimum array genap", Compare(Max(even_array), Max(odd_array)), "array ganjil")
console.log("Total array genap", Compare(Total(even_array), Total(odd_array)), "array ganjil")
console.log("Rata-rata array genap", Compare(Average(even_array), Average(odd_array)), "array ganjil")