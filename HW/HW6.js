//task 1
// // 1-st variant:

function updateText() {
  let testElement = document.getElementById('test');
  // // 2-nd variant:
  // let testElement = document.querySelector('div#test');
   testElement.innerHTML = ('Last');
}
updateText();

//task 2
let image = document.querySelector(".image");
image.src = "cat.jpg";
// document.getElementById("image").src = "cat.jpg";
alert(`New image: ${image.src}`);

//task 3
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (let i = 0; i < 3; i += 1) {
  console.log(`Selector text ${i}: ${paragraphs[i].innerText}`);
}

// task 4
let list = document.querySelector("#list");
// the second variant - let list = document.getElementById("list");
arr = [];
arr.push(list.children[0].innerHTML);
arr.push(list.children[4].innerHTML);
arr.push(list.children[1].innerHTML);
arr.push(list.children[3].innerHTML);
arr.push(list.children[2].innerHTML);
alert(arr.join(", "));

//task 5
document.querySelector("h1").style.backgroundColor = "#90ee90";

let text = document.querySelector("#myDiv");
let firstParagraph = text.children[0];
firstParagraph.style.fontWeight = "bold";
let secondParagraph = text.children[1];
secondParagraph.style.color = "red";
let thirdParagraph = text.children[2];
thirdParagraph.style.textDecoration = "underline";
let fourthParagraph = text.children[3];
fourthParagraph.style.fontStyle = "italic";

let myList = document.querySelector("#myList");
arr1 = [];
arr1.push(myList.children[0].innerHTML);
arr1.push(myList.children[1].innerHTML);
arr1.push(myList.children[2].innerHTML);
myList.innerHTML = arr1.join(" ");

//task 6

let firstInput = document.querySelector("#input1");
firstInput.value = prompt("Enter some message", "");
let firstValue = firstInput.value;

let secondInput = document.querySelector("#input2");
secondInput.value = prompt("Enter some message", "");
let secondValue = secondInput.value;

firstInput.value = secondValue;
secondInput.value = firstValue;

