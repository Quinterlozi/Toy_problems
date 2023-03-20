function calculateGrade() {
    let mark = parseInt(prompt("Please enter the student's mark (between 0 and 100):"));
    
    if (mark >= 80) {
      return 'A';
    } else if (mark >= 60 && mark <= 79) {
      return 'B';
    } else if (mark >= 50 && mark <= 59) {
      return 'C';
    } else if (mark >= 40 && mark <= 49) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  let grade = calculateGrade();
  console.log(`The student's grade is ${grade}`);