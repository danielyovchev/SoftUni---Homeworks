function solve(arr, type){
    let result = arr;
    if(type=="asc"){
        result.sort((a,b)=>a-b);
    }
    else{
        result.sort((a,b)=>b-a);
    }
    return result;
}
solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');