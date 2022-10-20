class Garden {
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plant = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired){
        if(spaceRequired > this.spaceAvailable){
            throw new Error("Not enough space in the garden.");
        }
        let plantObj = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        };
        this.spaceAvailable-=spaceRequired;
        this.plant.push(plantObj);
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity){
        
    }
    harvestPlant(plantName){

    }
    generateReport(){

    }
}
const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.)
//console.log(myGarden.addPlant('olive', 50));