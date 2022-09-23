function solve(arr, num){
    let result = arr;
    for (let i = 0; i < num; i++) {
        let temp = result.pop();
        result.unshift(temp);
    }
    console.log(result.join(" "));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)