function solve(input){
    let result = input;
    result.sort((a,b) => a.localeCompare(b));
    let index=1;
    result.forEach(element => {
        console.log(`${index++}.${element}`);
    });
}
solve(["John",

"Bob",

"Christina",

"Ema"])