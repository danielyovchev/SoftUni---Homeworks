function solve() {
  let result = "";
  let input = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;
  let arr = input.split(" ");
  if(type == "Camel Case"){
    let i=0;
    for(let word of arr){
      word = word.toLowerCase();
      if(i>0){
        result += word.charAt(0).toUpperCase() + word.slice(1);
      }
      else{
        result+=word;
      }
      i++;
    }
  }
  else if(type == "Pascal Case"){
    for(let word of arr){
      word = word.toLowerCase();
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  else{
    result = "Error!"
  }
  document.getElementById("result").innerHTML += result;
}