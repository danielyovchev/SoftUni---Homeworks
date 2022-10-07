function create(words) {
   for(let word of words){
      let p = document.createElement("p");
      let div = document.createElement("div");
      p.innerText=word;
      p.style.display="none";
      div.appendChild(p);
      div.addEventListener("click", showP);
      document.getElementById("content").appendChild(div);
   }
   function showP(event){
      if(event.target.nodeName == "P"){
         return;
      }
      let p = event.target.children[0];
      p.style.display = "block";
   }
}