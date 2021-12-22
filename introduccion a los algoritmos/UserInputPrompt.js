/**
 * Create a fork of this exericise. 
 * Read through the instructions and complete the exercise.
*/

/**
 * 
 *  Create a function that takes in 2 inputs (using prompt)
 *  and goes through the 5 arithmetic operators (+, -, /, *,
 *  %). The expected output on the console is:
 * `The sum is x` -> x is the calculated sum
 * `The subtraction is y` -> y is the calculated difference
 * `The multiplication is z` -> z is the calculated multiplication
 * `The division is w` -> w is the calculated division
 * `The remainder is q` -> q is the calculated remainder
 */
 function mathematicOperations() {
    let num1=parseInt( prompt(`insert 1 number`))
    let num2=parseInt( prompt(`insert 2 number`))
    console.log(`the sum is ${num1+ num2}`)
    console.log(`the subtraction is ${num1-num2}`)
    console.log(`the multiplication is ${num1*num2}`)
    console.log(`the division is ${num1/num2}`)
    console.log(`the remainder is ${num1%num2}`)

    

}

mathematicOperations();