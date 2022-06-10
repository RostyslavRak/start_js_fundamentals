//task №1
console.log("Task 1");
// props of the Object
let Obj = {
  name: "JS fundamental",
  members: 9,
  direction: "web-development",
};
//Making an arrey of the props of Object
function propsCount(Obj) {
  return Object.keys(Obj).length;
}
console.log("Total proterties of the Object: " + propsCount(Obj));

//task №2
console.log("                ");
console.log("Task 2");
// props of the Student
let student = {
  name: "Taras Shevchenko",
  age: 22,
  city: "Kyiv",
  course: "Literature",
  lectures: 40,
};
//Making an arrey of the props of Student
function showProps(student) {
  return Object.keys(student);
}
let property = showProps(student);
console.log("Show all properties of Student: " + Object.values(student));

//task №3
console.log("                ");
console.log("Task 3");
//  Class with constructor with props
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  //added to one string all props
  showFullName() {
    return this.name + " " + this.surname;
  }
}
//Added one more props to the Object
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  // added the middle name to the string of object
  showFullName(midleName) {
    return super.showFullName() + " " + midleName;
  }
  //calculating the course depend on year of entry
  showCourse() {
    let currentDay = new Date();
    let dayYear = currentDay.getFullYear();
    return dayYear - this.year;
  }
}
const student1 = new Student("Іван", "Франко", 2017);
console.log(student1);
console.log(student1.showFullName("Федорович")); /* added Midelname*/
console.log("Current course: " + student1.showCourse());

//task №4
console.log("                ");
console.log("Task 4");
//setting up the constructor of Class with 3 parametrs
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    return salary;
  }
  #experience = 1.2;
  //calculation salary taking to account experience of worker
  showSalaryWithExperience() {
    return this.showSalary() * this.#experience;
  }
  set experience(value) {
    this.#experience = value;
  }
  get experience() {
    return this.#experience;
  }
}
//List of workers
let worker1 = new Worker("Andrew Kowalski", 18, 20);
let worker2 = new Worker("Antony Hopkins", 20, 25);
let worker3 = new Worker("Tommy Edisson", 22, 30);
let worker4 = new Worker("Tom Krus", 50, 10);

let arr = [worker1, worker2, worker3, worker4];
//show the result of each worker
console.log("worker1 " + worker1.fullName);
console.log("worker1's Salary " + worker1.showSalary());
console.log("worker1's experience: " + worker1.experience);

worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("worker1 new experience: " + worker1.experience);
console.log("worker1 experience with 1.5: " + worker1.showSalaryWithExperience());

function sortBySalary(arr) {
  arr.sort((a, b) =>
    a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1 : -1
  );
  console.log("Sorted by salary:");
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i].fullName + ": " + arr[i].showSalaryWithExperience());
  }
}
sortBySalary(arr);

//task №5
console.log("                ");
console.log("Task 4");
//setting up the constructor of Class with calculation of area
class GeometricFigure {
  constructor() { }
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
// constractor for 3 sides of triangle + props from GeometricFigure
class Triangle extends GeometricFigure {
  constructor(oneSideTriangle, secondSideTriangle, thirdSideTriangle) {
    super();
    this.oneSideTriangle = oneSideTriangle;
    this.secondSideTriangle = secondSideTriangle;
    this.thirdSideTriangle = thirdSideTriangle;
  }
  // taking param for area and its calculation
  getArea() {
    let param =
      (this.oneSideTriangle +
        this.secondSideTriangle +
        this.thirdSideTriangle) /
      2;
    let areaTriangle = Math.sqrt(
      param *
      (param - this.oneSideTriangle) *
      (param - this.secondSideTriangle) *
      (param - this.thirdSideTriangle)
    );
    return areaTriangle;
  }
}
//constractor for square
class Square extends GeometricFigure {
  constructor(sideSquare) {
    super();
    this.sideSquare = sideSquare;
  }
  getArea() {
    return this.sideSquare ** 2;
  }
}
// constructor with param for Circle + param of GeometricFigure
class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
//setting of given data for figures
const figures = [new Triangle(4, 3, 5), new Square(7), new Circle(5)];
function handleFigures(figures) {
  for (let i = 0; i < figures.length; i += 1) {
    if (figures[i] instanceof GeometricFigure) {
      console.log("Geometric figure: "
        + figures[i].toString()
        + " - area: "
        + figures[i].getArea().toFixed(2)
      );
    }
  }
}
handleFigures(figures);

let totalArea = figures.reduce(function (previousValue, currentValue) {
  let square1 = previousValue;
  if (previousValue instanceof GeometricFigure) {
    square1 = previousValue.getArea();
  }

  let square2 = currentValue;
  if (currentValue instanceof GeometricFigure) {
    square2 = currentValue.getArea();
  }

  return square1 + square2;
});
console.log("Total area of figures: " + (totalArea.toFixed(2)));