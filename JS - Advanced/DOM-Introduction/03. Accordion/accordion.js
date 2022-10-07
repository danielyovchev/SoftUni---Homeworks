function toggle() {
    let type = document.getElementsByClassName("button")[0];
    if(type.textContent == "More"){
        document.getElementById("extra").style.display = "block";
        type.textContent = "Less";
    }
    
    else if(type.textContent =="Less"){
        document.getElementById("extra").style.display = "none";
        type.textContent = "More";
    }
}