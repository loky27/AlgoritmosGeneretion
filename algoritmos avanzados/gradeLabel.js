function gradeLabel(grade) {
    if (grade <= 6 && grade >= 0) {
        console.log("Failed");
    }
    if (grade > 6 && grade <= 9) {
        console.log("Insufficient");
    }
    if (grade > 9 && grade <= 14) {
        console.log("Good");
    }
    if (grade == 15) {
        console.log("Excellent");
    }
    if (grade < 0 || grade > 15) {
        console.log("Error, outside of bounds");
    }
}
grade(7)