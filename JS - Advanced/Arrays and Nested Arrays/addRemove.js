function solve(input){
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i] == "add"){
            result.push(i+1);
        }
        else{
            result.pop();
        }
    }
    if(result.length==0){
        console.log("Empty");
    } 
    else{
        result.forEach(el => console.log(el));
    }
}
solve(['remove', 'remove', 'remove'])