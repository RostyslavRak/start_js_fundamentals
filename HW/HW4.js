////****************task 1
console.log("Task 1");
function calcRectangleArea(width, height){
    validateValue(width)
    validateValue(height)
    return width * height;
}
function validateValue(value){
    if(isNaN(value)) throw Error(`Passed \"${value}\" value is not a number`)
    else if(Number(value) <= 0) throw Error(`Passed \"${value}\" value is not a valid rectangle side`)
}
// ////****************task 1_1
const a = prompt(" Enter the length 'a' side");
const b = prompt(" Enter the length 'b' side");
// const a = 15;
// const b = 10;
console.log(`Rectangle square : ${calcRectangleArea(a, b)}`)

function calcRectangleArea(width, height) {
    let sq = width * height;
    if(isNaN(width) == true || isNaN(height) == true) {
        throw new Error('Incorrect data! Integer needed');
    }
    return sq;
}

try {
    let result = calcRectangleArea(12, 2);
    console.log(result);
    } catch (exception) {
        console.log(exception.message);
    }

//////////////`Task 2

    function checkAge(age) {
        try {
            if(String(age).length == 0) throw EvalError("Enter your age ");
            if(isNaN(age)) throw EvalError("Enter your age in numbers");
            if(Number(age) < 14) throw EvalError("You're too young");
            else {
                console.log("Film is granted");}
        } catch (err) {
            alert(`${err.name} \n ${err.message}`);
        }
    }
    
    // const age = prompt("Enter your age");
    const age = 40;
    console.log(`Task 2`)
    checkAge(age);

//***********   Task 3    ************
console.log("Task 3");

class MonthException {
    constructor(message, name) {
        this.message = 'Incorrect month number';
        this.name = 'MonthException';
    }
}

const mon = new MonthException();

function showMonthName(month) {
    if (month == 1)
    return 'January';
    if (month == 2)
    return 'February';
    if (month == 3)
    return 'March';
    if (month == 4)
    return 'April';
    if (month == 5)
    return 'May';
    if (month == 6)
    return 'June';
    if (month == 7)
    return 'July';
    if (month == 8)
    return 'August';
    if (month == 9)
    return 'September';
    if (month == 10)
    return 'October';
    if (month == 11)
    return 'November';
    if (month == 12)
    return 'December';
    if (isNaN(month)) {
        throw new Error("Enter the month number");
      }
    else {
        throw new MonthException(mon.name + ': ' + mon.message);
    }
}

try {
    console.log(showMonthName(1));
}
catch (exception) {
    console.log(exception.message);
}

//***********   Task 4    ************
console.log("Task 4")
function showUser(id) {
    if (isNaN(id)) throw new Error(`Enter valid user id: ${id}`);
    if (Number(id) < 0) throw new Error(`ID can not be negative: ${id}`);

    return {
        "id": id
    };
}


function showUsers(ids) {
    var array = [];
    for (const id of ids) {
        try {
            var userObj = showUser(id);
            array.push(JSON.stringify(userObj));
        } catch (err) {
            console.log(`${err.message}`);
        }
    }
    console.log(`${array}`);
}

var array2 = [-1, 0, "23", 32, "q"];
showUsers(array2);



