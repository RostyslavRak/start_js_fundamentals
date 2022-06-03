// завдання №2 - Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище
const surname = "Rak";
console.log(surname);

// завдання №3 - оголосити змінні
const course = "JavaScript Fundamental";
let members = 7;
console.log(course);
console.log(members);
members = course;

//завдання №4 - створити об'єкт
const dataTypes = {
  string: "Rostyslav",
  number: 42,
  boolean: true,
  undefined: undefined,
  null: null,
};

//завдання №5 - використати метод confirm
let isAdult = confirm("Are you already 18 years old?");
console.log(isAdult);

//завдання №6 - створити змінні, перевірити тип даних і вивести їх в консоль
const name = "Rostyslav";
const mySurname = "Rak";
const group = "JS Fun";
const yearBirth = 1979;
const married = true;

console.log(typeof name);
console.log(typeof mySurname);
console.log(typeof group);
console.log(typeof yearBirth);
console.log(typeof married);
console.log(yearBirth);
console.log(typeof married);
console.log(name);
console.log(mySurname);
console.log(group);

let education = "university";
education = null;
let work;
console.log(education);
console.log(work);

// завдання №7 - за допомогою методу prompt запитати користувача пошту, логін і пароль
let login = prompt("Enter your login?", "Rostyslav Rak");
let email = prompt("Enter your email?", "rostyslav.rak@gmail.com");
let password = prompt("Enter your password?");
alert("Dear " + login + ", your email is " + email +", your password is " + password + ".");

// завдання №8 - вирахувати секунди в годині, добі та місяці
const hour = 3600;
const day = 86400;
const month = 2592000;
console.log("In an hour are " + hour + " seconds, in a day are " + day +" seconds and in a month - " + month +" seconds.");

//імпровізація з користувачем, щоб він теж вгадував)
let hour2 = prompt("Try to guess - how many seconds per hour", "type your number");
let day2 = prompt("Try to guess - how many seconds per day", "type your number");
let month2 = prompt("Try to guess - how many seconds per month", "type your number");
alert("Check yourself! In an hour are" + hour +" seconds, in a day are" + day +" seconds and in a month - " + month +" seconds.");