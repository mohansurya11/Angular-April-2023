// 6.convert all the negative numbers in a list to positive numbers

let numbers=[1,-2,3,-4,5,-6]
let convert_positive=numbers.map(num=>Math.abs(num))
console.log(convert_positive)