function getFibonator(){
    let fibPrev=0;
    let fibCurrent=1;
    return function(){
        let result = fibPrev+fibCurrent;
        fibPrev = fibCurrent;
        fibCurrent = result;
        return fibPrev;
    }
}
let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13