//Exercise #5
//For each of the exercises below, assume you are starting with the following people array.
//var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//    • Write a command that prints out all of the people in the list.
//    • Write the command to remove "Dani" from the array.
//    • Write the command to remove "Juan" from the array.
//    • Write the command to add "Luis" to the front of the array.
//    • Write the command to add your name to the end of the array.
//    • Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
//    • Write the command that gives the indexOf where "Maria" is located.
//At the end of the exercise, there should be 4 people in the array.
var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//Write a command that prints out all of the people in the list.
    console.log(people)
//Write the command to remove "Dani" from the array.
var people1 = people.splice(1, 1);
    console.log(people)
//Write the command to remove "Juan" from the array.
var people1 = people.splice(2,1);
    console.log(people)
//Write the command to add "Luis" to the front of the array.
var people1 = people.splice(1,1)
var people1 = people.unshift("Luis")
        console.log(people)
//Write the command to add your name to the end of the array.
var people1 = people.push("Abril")
        console.log(people)
//Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
//Creamos una función para iterar por los elementos del array hasta encontrar a Maria y salir del arreglo
function itera(){ 
if (people[0] == "Maria"){
    console.log("Exit");
} else if (people[1] == "Maria"){
    console.log("Exit");
} else if (people[2] == "Maria"){
    console.log("Exit");
} else if (people[3] == "Maria"){
    console.log("Exit");
} else {
    console.log(people);
} return;
}
itera();

console.log(people) 
//Write the command that gives the indexOf where "Maria" is located.
val = people.indexOf("Maria"); 
console.log(val);
