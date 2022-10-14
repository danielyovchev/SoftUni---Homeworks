function solve(obj){
    if(!(obj.method =="GET" || obj.method =="POST" || obj.method =="DELETE" || obj.method == "CONNECT")){
        throw new Error("Invalid request header: Invalid Method");
    }
    if(typeof(obj.uri) == 'undefined') {
        throw new Error("Invalid request header: Invalid URI")
    }
    if(!(obj.uri == "*" || obj.uri.match(/^[\w.]+$/g))){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!(obj.version === "HTTP/0.9" || obj.version === "HTTP/1.0" || obj.version === "HTTP/1.1" || obj.version === "HTTP/2.0")){
        throw new Error("Invalid request header: Invalid Version");
    }
    let specialChr = ['<', '>', '\\', '&', '\'', '"'];
    if(typeof(obj.message) == 'undefined') {
        throw new Error("Invalid request header: Invalid Message")
    }
    for(let ch of obj.message) {
        if(specialChr.includes(ch)) {
            throw new Error("Invalid request header: Invalid Message")
        }
    }
    
    return obj;
}

solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
})