// 1. let const
const numbers = [25, 774, 76, 14, 63, 58, 79, 221, 463, 127, 0];
let count = 0;
const student = {
    name: "abul jobbar",
    school: "dhaka college",
    roll: 321,
    group: "humanities",
    class: "nine",
    activities: "good",
};
// 2. template string

const templateStr = `hi my name is ${student.name}, I am studying at ${student.school} in the major of ${student.group}, my class roll is ${student.roll}`;

// 3. arrow function
// 3.a. with one parameter. will return the number after dividing by 5
const divideByFive = (number) => number / 5;

// 3.b. with two parameters. will add two to each number and then multiply the result.
const addNumberWithMultiply = (number1, number2) => (number1 += 2) * (number2 += 2);
// console.log(addNumberWithMultiply(5, 5));

// 3.c. three parameters. will multiply all three parameters
const MultiplyThreeNumber = (num1, num2, num3) => num1 * num2 * num3;
// console.log(MultiplyThreeNumber(10, 15, 20));

// 3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
// make sure you return the result
const multiLine = (num1, num2) => {
    num1 += 2;
    num2 += 2;
    return num1 * num2;
};
// console.log(multiLine(5, 5));

// 4. [home work]: javascript function declaration vs arrow function

// 5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
const multiplyByFive = numbers.map((number) => number * 5);
// console.log(multiplyByFive);

// 6. [challenging] numbers of array. get odd numbers by using filter with arrow function
const getOddNumbers = numbers.filter((number) => number % 2 !== 0);
const getEvenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(getOddNumbers);
// console.log(getEvenNumbers);

// 7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
const products = [
    { name: "Logitech Keyboard", price: 550, quantity: 50 },
    { name: "BENQ 21 inc Border Less Monitor", price: 11500, quantity: 15 },
    { name: "Huawei P9 Smart Phone", price: 5000, quantity: 23 },
    { name: "Book - JavaScript With Junayed", price: 490, quantity: 80 },
];
const findProduct = products.find((product) => product.price === 5000);
// console.log(findProduct.name);

// 7.5 Summery of array of map, forEach, filter, find
// Array.map() - getting array and working with arrays elements and finally return the result of an array.
// Array.forEach() - do not return any value. only working with array elements and execute the result.
// Array.filter() - working with array or array of object, find elements according to the condition and return elements with an array.
// Array.find() - working with an array of array of object, find the first element according to the condition and return only first element not in array.

// 8. You have an object. Now use destructing to create a simple variable of any property of the object.
const user = {
    name: "Mike",
    friend: ["John", "Paul", "Jimmy"],
    location: {
        region: "England",
        country: "United Kingdom",
    },
    aboutMe: {
        status: "Single",
        pet: "Dog",
    },
};
const {
    name,
    friend: [name1, name2, name3],
    aboutMe: { status, pet },
} = user;

// console.log(name1, name2, name3);

// 9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
const arr = ["one", "two", "three", "four", "five"];
const [one, two, three] = arr;
// console.log(three);

// 10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
// this function will take three parameters and will return the sum of all the three parameters.

const sumOfNumber = function (number1, number2, number3 = 7) {
    return number1 + number2 + number3;
};
// console.log(sumOfNumber(25, 25)); // 57
// console.log(sumOfNumber(25, 25, 25)); // 75

// 11. declare a nested object, that means declare a object into an another object property into an another object property, declare a this type of object. and  the value of any property will be an array
const nestedObj = {
    ownerName: "Md Akramuzzaman",
    companyName: "confident group",
    companyDetails: {
        companyName: "Confident Real Estate & Construction",
        companies: ["mahi timber", "confident real estate", "gem international"],
        anotherCompany: {
            companyName: "Mahi Timber",
            area: "chittagong",
        },
    },
};

// console.log(nestedObj.companyDetails?.companies?.[3]);

const {
    ownerName,
    companyDetails: {
        companies: [company1, company2, company3],
    },
} = nestedObj;

// console.log("Owner:", ownerName, "area:", company3, "Company:", company1);

// rest parameter
function funcName(x, y, ...z) {
    // console.log(`x = ${x}, y = ${y}, z = ${z}`);
    // console.log(x, y, z);

    // z.map((rest) => console.log(rest));
    return [x, y, ...z];
}

const num = funcName(30, 50, 100, 120, 40, 70);
// const oneProduct = products[0];
// console.log(oneProduct);

for (let x in products[0]) {
    // console.log(x, products[0][x]);
}
// console.log(num);

const newNum = num.map((x) => {
    return x;
});
// console.log(newNum);

// let x = 20;
// {
//     let x = 10;
//     console.log("inside ", x);
// }
// console.log("outside", x);

let z = 5;
const squareNumber = (x) => x * x + z;

// console.log(squareNumber(5));

function newFunction() {
    return arguments;
}

const arrFunc = (...param) => {
    return param;
};

console.log(arrFunc(25, 36, 477, 99, 78));
