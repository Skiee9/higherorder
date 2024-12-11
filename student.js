function processStudents(students) {
    let filteredStudents = students.filter(student => student.marks > 60);

   
   let sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);


 let sortedNames = sortedStudents.map(student => student.name);

    return sortedNames; 
}

let input = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
];

let output = processStudents(input);
console.log(output); 
