// Explore the functions Map,Reduce,Filter

// 1.Filter only prime numbers from a list of values

let numbers=[1,2,3,3,4,5,78,54,9,11]
function isPrime(x)
{
    if (x<2) 
    {
        return false
    }
    for(let i=2;i<x;i++){

        if(x%i==0){
            return false
        }
    }
        
    return true
        
}
let prime_num=numbers.filter(isPrime)
console.log(prime_num)