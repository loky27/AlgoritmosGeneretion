//Exercise #2
//Write a function that:
//    • Takes in an array of numbers.
//    • Doubles the value of each number in the array.
//    • Prints out the new updated array.
//Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
function doubleArray() {
var firstArray = [1, 2, 3, 4, 5]; // [2,4,6,8,10]
for (var i = 0; i < firstArray.length; i++){
firstArray [i] = firstArray[i] * 2;
}
console.log(firstArray);
}
doubleArray()