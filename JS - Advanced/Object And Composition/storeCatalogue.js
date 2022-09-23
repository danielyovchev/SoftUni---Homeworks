function solve(input){
    let map = new Map();
    for (const elem of input) {
        let data = elem.split(" : ");
        let product = data[0];
        let price = data[1];
        map.set(product,price);
    }
    let sortedAsc = new Map([...map].sort());
    let result = new Map();
    for (let elem of sortedAsc) {
        
        if(!result.has(elem[0][0])){
            let arr = [];
            for(let entry of sortedAsc){
                if(entry[0][0] == elem[0][0]){
                    arr.push(entry);
                }
            }
            result.set(elem[0][0], arr);
        }
    }
    for(let current of result){
        console.log(`${current[0]}`);
        for(let value of current[1]){
            console.log(` ${value[0]}: ${value[1]}`);
        }
    }
}
solve(['Banana : 2', 'Rubics Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10'])