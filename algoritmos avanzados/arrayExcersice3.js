//Exercise #3
//Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
//Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
function sumProduct(){
var array = [4, 5, 6 ,7, 8];
var sum = 0;
var product = 0;
for(var i = 0; i < array.length; i++){
sum += array[i];
product *= array[i];
}
console.log(sum + ' ' + product);
}
sumProduct()