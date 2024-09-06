function isPowerofTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
        return false;
        }
        n=n/2;
    }
    return true;
}

console.log(isPowerofTwo(0));
console.log(isPowerofTwo(4));
console.log(isPowerofTwo(100));
console.log(isPowerofTwo(98));
console.log(isPowerofTwo(45));

//Big O --O(logn)

//optimized solution

function isPowerofTwoOptimized(n){
    if(n<1){
        return false;
    }
    return (n & (n-1))===0;
}

console.log(isPowerofTwoOptimized(0));
console.log(isPowerofTwoOptimized(4));
console.log(isPowerofTwoOptimized(100));
console.log(isPowerofTwoOptimized(98));
console.log(isPowerofTwoOptimized(45));