
var str="sandeepgangavali";
var letter='a';
console.log(calculateCharCount(str,letter));

function calculateCharCount(str, letter) {
    var charCount = 0

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            charCount=charCount+1;
            }
        
       }

       return charCount;
}