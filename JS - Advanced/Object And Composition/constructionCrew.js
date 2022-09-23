function solve(input){
    let worker = Object.assign(input);
    if(worker.dizziness == true){
        let water = 0.1*worker.weight*worker.experience;
        worker.levelOfHydrated=water;
        worker.dizziness=false;
    }
    return worker;
}
solve({ weight: 95,

    experience: 3,
    
    levelOfHydrated: 0,
    
    dizziness: false })