// 5.Get the student with highest score [create a list of students with marks as property]

list=[
    {name:'mohan',marks:99},
    {name:'surya',marks:100},
    {name:'mohansurya',marks:96},

]

let student=list.reduce(function(std1,std2){
    return std1.marks>std2.marks?std1:std2

})
console.log("The highest marks scored by the student is",student)