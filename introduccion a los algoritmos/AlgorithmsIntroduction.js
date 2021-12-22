//Part 1
//
//    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 1.
//    Write a program where a user enters the number of tasks they have completed. The program returns one of the following labels to the console:
//
//**Failed**
//**Insufficient**
//**Good**
//**Excellent**
//**Error**
//
//based on the conditions:
//
//    Failed if they scored 6 or less
//    Insufficient if they scored > 6 but less than 9 (9 included)
//    Good if they scored > 9 but less than 14 (14 included)
//    Excellent if they scored 15
//    Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)
//
function TasksTheyHaveCompleted(val) {
    val=parseInt(prompt(`value`))
    if((0<=val)&&(val<=15)){
        if((0<=val)&&(val<6)){
            alert(` Failed `)
        }
        if((6<=val)&&(val<9)){
            alert(`Insufficient `)
        }
        if((9<=val)&&(val<15)){
            alert(`Good`)
        }
        if(15===val){
            alert(`Excellent`)
        }
    }


}
//Part 2
//
//    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
//    Write an algorithm to find the largest among 5 different numbers entered by the user.
//    Print out the largest number to the console.
//
function mañor(val1,val2,val3,val4,val5) {
    val1=parseInt(prompt(`value1`))
    val2=parseInt(prompt(`value2`))
    val3=parseInt(prompt(`value3`))
    val4=parseInt(prompt(`value4`))
    val5=parseInt(prompt(`value5`))
    let aux=val5
    if (aux<val1) {
        aux=val1
    }
    if (aux<val2) {
        aux=val2
    }
    if (aux<val3) {
        aux=val3
    }
    if (aux<val4) {
        aux=val4
    }
    if (aux<val4) {
        aux=val4
    }
    alert(aux)
}

//Part 3
//
//    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3.
//    We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
//    Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console.
function markert(val1,val2,val3) {
val1=parseInt(prompt(`value1`))
val2=parseInt(prompt(`value2`))
val3=parseInt(prompt(`value3`))
let aux=val3
if (aux>val1) {
    aux=val1
}
if (aux>val2) {
    aux=val2
}
if (aux>val3) {
    aux=val3
}
let aux2=val1+1
if ((aux2>val1)&&(aux<val1)) {
    aux2=val1

}
if ((aux2>val2)&&(aux<val2)) {
    aux2=val2

}
if ((aux2>val3)&&(aux<val3)) {
    aux2=val3

}
return(`${aux} ${aux2}`)
}

markert(1,2,3)
markert(2,3,1)
markert(3,2,1)