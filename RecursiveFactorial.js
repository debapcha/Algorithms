function recursiveFactorial(n){
    if(n===0){
        return 1;
    }
    return n* recursiveFactorial(n-1);

}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(78));
console.log(recursiveFactorial(67));