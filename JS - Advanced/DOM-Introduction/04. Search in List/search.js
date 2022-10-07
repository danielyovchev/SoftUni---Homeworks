function search() {
   // TODO

   let input = document.getElementById("searchText").value;
   let arr = Array.from(document.querySelectorAll("ul li"));
   let matches = 0;
   
   for (let city of arr) {
      city.style.textDecoration = "none";
      city.style.fontWeight = "normal";
      if(city.textContent.includes(input)){
         matches++;
         city.style.textDecoration = "underline";
         city.style.fontWeight = "bold";
      }
   }
   
   document.getElementById("result").innerHTML = `${matches} matches found`;
   console.log(document.getElementById("result").innerHTML);
}
