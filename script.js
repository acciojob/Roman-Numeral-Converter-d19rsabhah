function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

// function convertToRoman(num) {
//     const romanSymbols = [
//         ['M', 1000],
//         ['CM', 900],
//         ['D', 500],
//         ['CD', 400],
//         ['C', 100],
//         ['XC', 90],
//         ['L', 50],
//         ['XL', 40],
//         ['X', 10],
//         ['IX', 9],
//         ['V', 5],
//         ['IV', 4],
//         ['I', 1]
//     ];

//     let result = '';

//     for (let [symbol, value] of romanSymbols) {
//         while (num >= value) {
//             result += symbol;
//             num -= value;
//         }
//     }

//     return result;
// }

// // Example usage
// const inputNumber = parseInt(prompt("Enter a number: "));
// if (inputNumber >= 0 && inputNumber <= 100000) {
//     console.log(convertToRoman(inputNumber));
// } else {
//     console.log("Input number must be between 0 and 100000.");
// }

