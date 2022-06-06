//task №1
let arr1 = [2, 3, 4, 5];
let prod = 1;
for (let i = 0; i < arr1.length; i ++) {
  prod = prod*arr1[i];
}
console.log("task №1_0 " + prod);

let arr2 = [2, 3, 4, 5];
let arr3 = 0;
let prod1 = 1;
while (arr3 < arr2.length) {
  prod1 *= arr2[arr3];
  arr3 ++;
}
console.log("task №1_1 " + prod1);

///////////////task №2
console.log("task №2")

for (let i = 1; i < 15; i ++) {
  if (i % 2 == 0) {
      console.log(`${i} is even`);
        } else {
         console.log(`${i} is odd`);
    
  }
}  



//task №3
let k = [];
function randArray(k) {
  for (let i = 0; i < 5; i += 1) {
    k.push(Math.floor(Math.random() * 500));
  }
  return k;
}
console.log("task №3 " + randArray(k));

console.log("task №4");
let a = Number(prompt("Enter please 'a' number"));
for(let i = 0; i < 3; i += 1 ){
    if(!Number.isInteger(a) ){
        alert('We support only integers. Please try again')
        a = prompt("Enter please 'a' number");
    }
    else break;
}

let b = Number(prompt("Enter please 'b' number"));
for(let i = 0; i < 3; i += 1 ){
    if( !Number.isInteger(b) ){
        alert('We support only integers. Please try again')
        b = prompt("Enter please 'a' number");
    }
    else break;
}

function raiseToDegree(a, b){
    if(Number.isInteger(a) && Number.isInteger(b)) return a ** b;
    else return "Not integer input was provided"
}

console.log(`Degreed result: ${raiseToDegree(a, b)} `);

// task №5
function findMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log("task №5 " + findMin(12, 14, 4, -4, 0.2));

//2 version of task 5
function findMin() {
    return Math.min(...arguments);
}

console.log("task №5 2 ver " + findMin(12, 14, 4, -4, 0.2));

// task №6
function findUnique(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let a = i + 1; a < arr.length; a += 1) {
      if (arr[i] === arr[a]) {  
          console.log("task №6 " + arr[i]);

        return false;      
      }
    }
  }
  return true;
}

console.log("task №6_1 " + findUnique([1, 2, 3, 5, 3]));
console.log("task №6_2 " + findUnique([1, 2, 3, 5, 7]));

//task № 7

function lastElem(arr, num) {
    let newArray = arr[arr.length-1];
    if (num > 0){
        newArray = arr.slice(-num);
    }
    return newArray;
}

console.log("task №7_1 " + lastElem([3, 4, 10, -5]));
console.log("task №7_2 " + lastElem([3, 4, 10, -5], 2));
console.log("task №7_3 " + lastElem([3, 4, 10, -5], 8));   

//task №8
let str = " ";
function camelCase1(str) {
  let startString = str.split(" ");
  for (let i = 0; i < startString.length; i += 1) {
    let phrase = startString[i];
    let firstLetter = phrase[0].toUpperCase();
    startString[i] = firstLetter;
    let endphrase = phrase.substring(1, phrase.length);
    phrase = firstLetter + endphrase;
    startString[i] = phrase;
  }
  str = startString.join(" ");
  return str;
}
console.log("task №8_1 " + camelCase1("i love java script"));

function camelCase2(str) {
    let newStr = "";
    let result = str.split(" ");

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        newStr += result[i] + ' ';
    }
    return newStr;
}

console.log("task №8_2 " + camelCase2('i love java script'));