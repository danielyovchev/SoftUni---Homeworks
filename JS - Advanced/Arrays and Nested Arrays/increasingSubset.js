function solve(arr){
    let result = [];
    result.push(arr[0]);
    let max = result[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>=max){
            max = arr[i];
            result.push(arr[i]);
        }
    }
    return result;
}
solve([1, 2, 3, 4])