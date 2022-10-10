function solution(){
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipesEnum = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }
    return function inputHandler(input){
        let action = command();
        let [cmd, element, quantity] = input.split(" ");
        return action[cmd](element,quantity);
    }
    function command(){
        return{
            restock: (element, quantity) => {
                store[element] = store[element] + Number(quantity);
                return "Success";
            },
            prepare: (recipe, quantity) => {
                let isDone = true;
                let output = "Success";
                let copyStore = JSON.parse(JSON.stringify(store));
                for(let [key,value] of Object.entries(recipesEnum[recipe])){
                    let need = Number(quantity) * value;
                    if(store[key] < need){
                        isDone = false;
                        output = `Error: not enough ${key} in stock`;
                        break;
                    }
                    copyStore[key] -= need;

                }
                store = copyStore;
                return output;
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
            }
        }
    }
}
let manager = solution ();

console.log (manager ("restock flavour 50")); // Success

console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));