function factorial(n){
    let fact=1;
    for(let i=2;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}

console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(78));
console.log(factorial(67));
console.log(factorial(10000));

//Big O --O(n)