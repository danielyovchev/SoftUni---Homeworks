function solve(...args){
    let arr = args;
    let types = {};
    for(let current of arr){
        let type = typeof current;
        console.log(`${type}: ${current}`);
        if(type in types){
            types[type]++;
        }
        else{
            types[type] = 1;
        }
    }
    let sorted = [];
    for(let key in types){
        sorted.push([key, types[key]]);
    }
    sorted.sort((a,b) => b[1] - a[1]);
    sorted.forEach(a => console.log(`${a[0]} = ${a[1]}`));
}
solve('cat', 42, function () { console.log('Hello world!'); });