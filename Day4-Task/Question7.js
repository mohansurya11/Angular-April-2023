// 7.filter only the students who got more than 70%

list=[
    {name:'mohan',percentage:99},
    {name:'surya',percentage:72},
    {name:'mohansurya',percentage:45},

]

let students=list.filter(std=>std.percentage>70 )
console.log(students)
