function solve(input){
    let result = input;
    result.sort((a,b) => {
        if(a.length == b.length){
            return a.localeCompare(b);
        }
        return a.length-b.length;
    });
    result.forEach(element => console.log(element));
}
solve(['test', 'Deny','omen', 'Default']);