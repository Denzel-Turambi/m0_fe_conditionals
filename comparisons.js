// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log(`is numberTeachers less than numberStudents?`, numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log (`is numberTeachers strictly equal to stringTeachers?`, numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log(`Is numberTeachers not equal to numberStudents?`, numberTeachers !== numberStudents)
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log(`Is numberStudents greater than or equal to 20?`, numberStudents >= 20)
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log(`Is numberStudents greaather than or equal to 21?`, numberStudents >= 21)
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log(`is NumberStudents less than or equal to 20?`, numberStudents <= 20)
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log(`is numberStudents less than or equal to 21?`, numberStudents <= 21)

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// console.log will print out a true or false statement based on the prompt given to it, which is 4 < 9.
// In this case, if you run 'node comparisons.js' in the terminal,v the code will print out: true.
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// The first line declares 3 as books. The second line is asking if 4 is less than books, essentially, is 4 less than 3. 
// This should log: false. 
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// friends is declaring 6 as a number, and 2 is declaring 2 as a number.
// the console.log is asking if friends is greater than siblings, or is 6 greater than 2.
// This should log: true.
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// attendees declares 9 as a number, and meals declares 8 as a number.
// the console.log is asking if attendees is not strictly equal to meals, or is 9 not strictly equal to 8.
// this should log: true

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(`does the dog love to play and love treats?`, lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park
console.log(`does the dog love to play and love the dog park?`, lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
console.log(`does the dog love to play or love the dog park?`, lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
console.log(`does the dog love to play and is it a puppy?`, lovesToPlay && age <= 1)
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: the final line of code evaluated to: true.
// This is because, lovesToPlay was declared as true, and the dog's age is 1.(To me, that is still a puppy)
// running `age <= 1` is asking is it true that the puppy's age is less than or equal to 1.
// Therefore, both loveToPlay and age are true, and the printed log would be: true.