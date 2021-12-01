function shout(string) {
    return string.toUpperCase();

}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
    
}
function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
     var responce1 = "I can't hear you!";
     var responce2 = "YES INDEED!";
     var responce3 = "I love you, too.";

    if (string === string.toLowerCase(string)){
       
        return responce1;

    }
    else if (string === string.toUpperCase(string)){
        
        return responce2;
    }
    else if (string === "I love you, Grandma."){
        
        return responce3;
    }
    
    
}