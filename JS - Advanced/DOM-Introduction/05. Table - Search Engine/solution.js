function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById("searchField").value;
      let data = Array.from(document.querySelectorAll("tbody tr"));
      for(let current of data){
         current.style.background = "default";
         if(input){
            if(current.textContent.includes(input)){
            current.classList.add("select");
         }
            else{
            current.classList.remove("select");
            }
         }
         else{
         current.classList.remove("select");
         }
      }
      document.getElementById("searchField").value = "";
   }
}