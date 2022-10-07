function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      let bestRestaurantInfo = document.querySelector("#bestRestaurant p");
      let bestWorker = document.querySelector("#workers p");
      let result = [];
      for(let elem of input){
         let [name, workerList] = elem.split(" - ");
         if(!result.find(e=>e.name == name)){
            result.push({
               name,
               avgSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workerList: []
            });
         }
         let currentRest = result.find(e=>e.name == name);
         workerList = workerList && workerList.split(", ");
         for(let worker of workerList){
            updateRestaurant(currentRest, worker);
         }
      }
      let bestRestaurant = result.sort((a,b) => b.avgSalary - a.avgSalary)[0];
      bestRestaurantInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let sortListWorkers = bestRestaurant.workerList.sort((a,b) => b.salary - a.salary);
      let buff="";
      for(let worker of sortListWorkers){
         buff+=`Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      bestWorker.textContent += buff;
   }
   function updateRestaurant(obj, worker){
      let [name, salary] = worker.split(" ");
      salary = Number(salary);
      obj.sumSalary += salary;
      if(obj.bestSalary < salary){
         obj.bestSalary = salary
      }
      obj.workerList.push({
         name,
         salary
      });
      obj.avgSalary = obj.sumSalary / obj.workerList.length;
   }
}