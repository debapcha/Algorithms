function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;

}
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(79));

//Big O -- O(n)

//Optimized solution

function isPrimeOptimized(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrimeOptimized(3));
console.log(isPrimeOptimized(5));
console.log(isPrimeOptimized(7));
console.log(isPrimeOptimized(9));
console.log(isPrimeOptimized(79));

//Big O-- O(sqrt(n))
