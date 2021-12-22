//Arrays 
//Exercise #1 
//Open up a blank repl.it set to Javascript. Copy the code below into your workspace: 
var arr = ["This", "is", "a", "sentence."];
function printOutString() {
var result = '';
for(var i = 0; i < arr.length; i++){
result += arr[i] + ' ';
}
console.log(result);
}
printOutString()