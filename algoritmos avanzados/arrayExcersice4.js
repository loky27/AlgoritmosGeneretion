//Exercise #4
//var student1Courses = ['Math', 'English', 'Programming'];
//var student2Courses = ['Geography', 'Spanish', 'Programming'];
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
var student1Courses = ['Math', 'English', 'Programming'];
    var student2Courses = ['Geography', 'Spanish', 'Programming'];
        
    curso1 = student1Courses.sort();
    console.log(curso1);
        
    curso2 = student2Courses.sort();
    console.log(curso2);
        
        if (curso1[0] == curso2[0] || curso1[0] == curso2[1] || curso1[0] == curso2[2]){
            console.log(curso1[0]);
        } else if (curso1[1] == curso2[0] || curso1[1] == curso2[1] || curso1[1] == curso2[2]){
            console.log(curso1[1]);
        } else if (curso1[2] == curso2[0] || curso1[2] == curso2[1] || curso1[2] == curso2[2]){
            console.log(curso1[2]);
        } else {
            console.log("No hay cursos en común");
        }
 