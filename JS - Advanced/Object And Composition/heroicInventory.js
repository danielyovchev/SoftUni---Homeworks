function solve(input){
    let result=[];
    for (const elem of input) {
        let [name, level, items] = elem.split(" / ");
        level = Number(level);
        if(items){
            items = items.split(", ");
        }
        else{
            items = [];
        }
        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}
solve(['Isacc / 25',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);