function checkEmptyString(str) {
    str=prompt(`insert string`)
    if (str.length!=0) {
        alert(str[0])
    }
    else{
        alert(`This string is empty`)
    }
}
/**
 * Exercise 2:
 * We want to compare two strings and check if
 * they are the same - case insensitive.
 * Return a boolean - true if the two strings are
 * the same, and false if they are not 
 */
function checkTwoStringsSame(str1, str2) {
    str1=prompt(`insert string 1`).toUpperCase()
    str2=prompt(`insert string 2`).toUpperCase()
    if (str1.length==str2.length) {
        for (let index = 0; index < str1.length; index++) {
            if (str1[index]===str2[index]) {
                if (index+1===str1.length) {
                    alert(`true`)
                }
            } else {
                alert(`false`)
            }
        }
    } else {
        alert(`false `)
    }
}
checkTwoStringsSame("String1", "string1")