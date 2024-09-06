function recursiveFibonacci(n){
    if(n<2){
        return n;
    }
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);

}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(10));

//Bad logic to apply Big ) --O(2^n)