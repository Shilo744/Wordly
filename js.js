let letterLocation=1;
let line=0;
const maxColumn=5;
let word;
let isFirst=true;
let gameOn=true;
const correction=1;
let checkThatAllBoxesAreFull=0;
const words=["טיגון","לישון","לחמוד","הימור","אכלתי","מגניב","חליפה","תחקיר","שליחה","וילון","רמקול","אפרוח","טאבלט","חולצה","משאית","שולחן","אלבום","מנורה","מדפסת","קליפה"];
function changeLetter(key){
    if(gameOn){
    if((line+correction)*maxColumn>=letterLocation){
if(key.innerText!=null){
    document.getElementById(letterLocation.toString()).innerText=key.innerText;}
else{
    document.getElementById(letterLocation.toString()).innerText=key;
}
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
        document.getElementById((location+i+correction).toString()).style.color="white";
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

        if(word[k]===insideWord[k]){
            document.getElementById((location+k+correction).toString()).style.backgroundColor="green";
        }
    }
    gameOn=false;
    for (let i = 0; i < word.length; i++) {
        if(document.getElementById((location+i+correction).toString()).style.backgroundColor!=="green"){
            gameOn=true;
            break;
        }
    }
}
function keyboard(event) {
    var letter = event.key;
    if(isLetter(letter)){
    changeLetter(letter);}
    else if(letter==='Enter'){
        nextLine();
    }
    else if(letter==='Backspace'){
        deleteLetter();
    }
}
function mouseover(element){
    element.style.color = "lime";
}
function mouseout(element){
    element.style.color = "black";
}
function isLetter(letter) {
    const letters=["ק","ר","א","ט","ו","ן","ם","פ","ש","ד","ג","כ","ע","י","ח","ל","ך","ף","ז","ס","ב","ה","נ","מ","ץ","ת","צ"];
    for (let i = 0; i < letters.length; i++) {
        if(letter===letters[i]){
            return true;
        }
    }
    return false;
}