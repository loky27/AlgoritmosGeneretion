//Exercise #3
//
//Step 1
//
//Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).
//




//Step 2
//
//    Find a partner.
//    Exchange your code.
//    Read your partner's code and suggest improvements on how you would refactor their code.
//    Test your partner's code for correctness (does it give the correct output), if it does not give the correct output, work together to fix the code.
//
    //Ejercicio 3
    const numbers2 = [8, 12, 3, 5, 9];
        console.log(numbers2);

    //En este caso concatenamos los dos Arrays
        valores = numbers.concat(numbers2);
            console.log(valores);
    //Aqui se acomoda de mayor a menor e imprime el primer numero
        valores = valores.sort(function(x,y){
                return x-y
                });
                console.log(valores[0]); 

//Otra opcion de hacer el ejercicio 3
const numbers3 = [7, 9, 3, 8, 5]
    
        valor2 = numbers3.sort(function(x,y){
            return y-x
        });
        console.log(valor2);
    
    if (valor[0] > valor2[0]){
        console.log(valor[0]);
    } else {
            console.log(valor2[0]);
