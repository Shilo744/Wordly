let letterLocation=1;
let line=0;
let maxColumn=5;
let word;
let isFirst=true;
let gameOn=true;
let correction=1;
let checkThatAllBoxesAreFull=0;
let words=["טיגון","לישון","לחמוד","הימור","אכלתי","מגניב","חליפה","תחקיר","שליחה","קליפה"];
function changeLetter(key){
    if(gameOn){
    if((line+correction)*maxColumn>=letterLocation){
    document.getElementById(letterLocation.toString()).innerText=key.innerText;
        document.getElementById(letterLocation.toString()).style.border="1px solid black";
        letterLocation++;}

}}
function deleteLetter(){
    if(letterLocation>line*maxColumn+correction){
        letterLocation--;
        document.getElementById(letterLocation.toString()).style.border="1px solid lightgrey";
    }
    document.getElementById(letterLocation.toString()).innerText="";
}
function nextLine(){
    if(isFirst){
        let random=Math.ceil(Math.random() * (words.length-correction));
        word=words[random];
    isFirst=false;}

    if((letterLocation)%(maxColumn*(line+correction)+correction)===checkThatAllBoxesAreFull){
        checkCorrection();
    line++;
    }
}
function checkCorrection(){
    let location= line * maxColumn;
    let insideWord=
        document.getElementById((location+1).toString()).innerText+
        document.getElementById((location+2).toString()).innerText+
        document.getElementById((location+3).toString()).innerText+
        document.getElementById((location+4).toString()).innerText+
        document.getElementById((location+5).toString()).innerText;

    for (let i = 0; i < word.length; i++) {
        document.getElementById((location+i+correction).toString()).style.backgroundColor="slategrey";
        document.getElementById((location+i+correction).toString()).style.border="1px solid lightgrey";

    }
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < insideWord.length; j++) {
            if(word[i]===insideWord[j]){
                document.getElementById((location+j+correction).toString()).style.backgroundColor="darkgoldenrod";
            }
        }
    }
    for (let k = 0; k <word.length; k++) {
        document.getElementById((location+k+correction).toString()).style.color="white";
        if(word[k]===insideWord[k]){
            document.getElementById((location+k+correction).toString()).style.backgroundColor="green";
        }
    }
    for (let i = 0; i < word.length; i++) {
        if(document.getElementById((location+i+correction).toString()).style.backgroundColor!=="green"){
            break;
        }else {
            gameOn=false;
            break;
        }
    }
}
function mouseover(element){
    element.style.color = "lime";
}
function mouseout(element){
    element.style.color = "black";
}