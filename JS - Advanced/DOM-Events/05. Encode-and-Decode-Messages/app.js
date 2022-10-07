function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName("button")[0];
    let decodeBtn = document.getElementsByTagName("button")[1];
    let message = encodeBtn.parentElement.children[1];
    let result = decodeBtn.parentElement.children[1];
    encodeBtn.addEventListener('click', () =>{
        let buffer = "";
        for(let char of message.value){
            buffer+= String.fromCharCode(char.charCodeAt(0)+1);
        }
        result.value = buffer;
        message.value = "";
    });
    decodeBtn.addEventListener('click', () => {
        let buffer = "";
        for(let char of result.value){
            buffer+= String.fromCharCode(char.charCodeAt(0)-1);
        }
        result.value = buffer;
    });
}