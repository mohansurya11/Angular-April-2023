// 4.get sum of all the length of the string in the list

string=['mohan','mohansurya','suryak','mohanmohanmohan']
let sum=string.reduce(function(a,str){
    return a+str.length
},0)

console.log(sum)