function Exercise1(num) {
    num =prompt(`insert number`)
    if (num>=10) {
        alert(`true ${num}if it is greater `)
    } else {
        alert(`false ${num} otherwise `)
    }
}
Exercise1()
function Exercise2(num) {
    num=parseInt(prompt(`insert number`));
    if(num%4===0){
        alert(`${num} if divisible by 4 `)
    };
    if(num%9===0){
        alert(`${num} if divisible by 9`)
    }
}
Exercise2()