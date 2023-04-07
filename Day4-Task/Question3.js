// 3.Get the lengthest string in the list of string

str=['mohan','mohansurya','suryak','mohanmohanmohan']
let lengthest_str=str.reduce((element1,element2)=>{
    return element1.length>element2.length?element1:element2
})

console.log(lengthest_str)