console.log("Exercise #1: Print an array");
var arr = ["This", "is", "a", "sentence."];
function printOutString() {
    console.log(arr[0] +" "+ arr[1] +" "+ arr[2] +" "+ arr[3])
}
printOutString();


console.log("Exercise #2: Print the double array of numbers");
var num = [1,2,3,4,5];
function printDoubleNum() {
    var doub=[num[0]*2, num[1]*2, num[2]*2, num[3]*2, num[4]*2]
    console.log(num);
    console.log(doub); 
}
printDoubleNum();


console.log("Exercise #3: Print the sum and the product of an array of numbers");
var numb = [10,20,30,40,50];
function printSumPro() {
    console.log("Sum: " + (numb[0] + numb[1] + numb[2] + numb[3] + numb[4]));
    console.log("Product: " + (numb[0] * numb[1] * numb[2] * numb[3] + numb[4]));
}
printSumPro();


console.log("Exercise #5: Print the same subject");
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Math', 'Geography', 'Spanish', 'Programming', 'English'];
function printSame() {
    for (let i = 0; i < student1Courses.length; i++) {
        for (let j = 0; j < student2Courses.length; j++) {
            if(student1Courses[i] === student2Courses[j]){
                console.log(student1Courses[i]);
            }
        }
    }
        
    }
printSame();


console.log("Exercise #6: Print the people array");
var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
function printPeople() {
    people.splice(1,1);
    people.splice(2,1);
    people.splice(1,1);
    people.unshift("Luis");
    people.push("Mario");

    for (let i = 0;  i < people.length; i++) {
        if(people[i] === "Maria"){
            console.log("Maria is in the index: " + i);
            console.log(people);
        }
    }
}
printPeople();


console.log("Exercise #7: Print an array sort");
var peopleNames = ["Julio", "Luis Daniel", "Luis Carlos", "Juan", "Karen"];
console.log(peopleNames);
function printPeopleSort() {
    console.log(peopleNames.sort());
}
printPeopleSort();


console.log("Exercise #8: Determ the lenght of an array");
var list = [7, 4, 3, 53, 2, "Mario", "Julio"]
function leng(list) {
    if (list.length === 0) {
      return 0;
    }
    
    return list.length;
  }
leng(list);


console.log("Exercise #9: Print the status of a number array");
var grade = 15;
function gradeLabel(grade) {
    if (grade < 6 && grade > 0) {
        console.log("Failed");
    }
    if (grade > 6 && grade <= 9) {
        console.log("Insufficient");
    }
    if (grade > 9 && grade <= 14) {
        console.log("Good");
    }
    if (grade == 15) {
        console.log("Good");
    }
    if (grade < 0 || grade > 15) {
        console.log("Error, outside of bounds");
    }
}
gradeLabel(grade);