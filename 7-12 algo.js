function stringToWord(str) {
    let arr = [];
    var tempWord = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
        tempWord += str[i];
        } else {
        arr.push(tempWord);
        tempWord = "";
        }
    }
    arr.push(tempWord);
    return arr;
}

function reverseWordOrder(str) {
    let newString = "";
    let tempWord = stringToWord(str);
    for (let i = tempWord.length - 1; i >= 0; i--) {
        newString += tempWord[i] + " ";
    }
    return newString;
}

function RotateString(str , n){
    let temp = "";
    for(let i = str.length - n; i < str.length; i++){
        temp += str[i];
    }
    for(let j = 0; j < str.length- n; j++ ){
        temp += str[j];
    }
    return temp;
}

function isRotate(str, str2){
    for(i = 0; i < str.length; i++){
        if(RotateString(str, i) === str2){
            return true;
        }
    }
    return false;
}

function deDupe(str1,str2){
    for (let i = 0; i > str1.length; i++){
        for(let j =0; j> str2.length;j++){
            if(str1[i] == str2[j]){
                return true;
            }
        }return false;
    }
}

console.log(deDupe("Hapy"))
console.log(stringToWord("happy Monday everyone!"))
console.log(reverseWordOrder("happy monday everyone!"))
console.log(RotateString("hello world", 3)); 
console.log(isRotate("hello world", "rldhello wo"))