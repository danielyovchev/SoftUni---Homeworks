function solve(x1,y1,x2,y2){
    let comparison1 = Math.sqrt(Math.pow(0-x1,2)+Math.pow(0-y1,2));
    let comparison2 = Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2));
    let comparison3 = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    if(Number.isInteger(comparison1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if(Number.isInteger(comparison2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if(Number.isInteger(comparison3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
solve(3, 0, 0, 4);
solve(2, 1, 1, 1);