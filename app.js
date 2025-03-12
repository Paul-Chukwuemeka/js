// // number - numerical value
// // strings - alphabetical values
// // boolean - true/false values

// // let number = 100
// // const string = 'hello there'

// // console.log(number)
// // console.log(string)

// // number = 200
// // console.log(number)
// // string = " hello me"

// // operators in js

// // + - * / %

// // Type conversion
// let test = 100
// test = String(test)
// test = Number(test)

// console.log(typeof (test))
// // console.log(number + number)
// // console.log(number * 5)
// // console.log(number -100)
// // console.log(number / 20)
// // console.log(number % 3)

// // For Week 1 Day 2, let's build on the basics:

// // Assignment: Variables, Constants, and Operators

// // 1. Working with Variables:

// // Declare two variables x and y and assign them the values 5 and 10 respectively.

// // Swap their values without using a third variable.

// // Print the values of x and y before and after the swap.

// // let x = 5
// // let y = 10

// // console.log(x)
// // console.log(y)

// // x = 10
// // y = 5

// // console.log(x)
// // console.log(y)

// // 2. Using Constants:

// // Declare a constant variable PI with a value of 3.14159.

// // Write a program that calculates the circumference of a circle using the formula: circumference = 2 * PI * radius.

// // The radius should be stored in a variable and assigned any value you choose.

// // const PI = 3.14159
// // let radius = Number(prompt("Please enter the radius of the circle"))

// // let circumference = 2 * PI * radius

// // console.log(circumference)

// // 3. Basic Operators:

// // Create a small program that performs and prints the result of the following operations:

// // Addition of two numbers.

// // Subtraction of two numbers.

// // Multiplication of two numbers.

// // Division of two numbers.

// // Modulus (remainder) of two numbers.

// const number1 = 4
// const number2 = 6

// let addition = number1 + number2
// console.log(addition)

// let substraction = number1 - number2
// console.log(substraction)

// let multiplication = number1 * number2
// console.log(multiplication)

// let division = number1 / number2
// console.log(division)

// let modulus = number2 % number1
// console.log(modulus)

// // 4. String Concatenation:

// // Declare two string variables firstName and lastName, assign them your first and last name.

// // Concatenate these two strings and print the full name.

// const firstName = " Cristiano "
// const lastName = " Messi"

// console.log(firstName + lastName)

// // Submission Guidelines:

// // Submit the code in a .js file.

// // Let me know if you want to adjust anything!

// // comparators
// //  == - checks if values are similar
// // === - checks if values and datatype are similar
// console.log(100 == "100")
// console.log(100 === "100")
// // != - checks if values are not similar
// // !== - checks if values and datatype  are not similar
// console.log(100 != "100")
// console.log(100 !== "100")

// // > - checks if value is greater
// // < - checks if value is lesser
// // >= - checks if value is greater or equal
// // <= - checks if value is lesser or equal
// // console.log(100 > 50)
// // console.log(100 < 50)
// // console.log(100 >= 100)
// // console.log(100 <= 100)

// // conditionals in js

// // if else statement
// // switch statement

// // if (100 < 20) {
// //     console.log("100 is less than other value")
// // }
// // else {
// //     console.log("100 is not less than other value")
// // }

// // let numberToCheck = prompt("please input a number")
// // console.log(numberToCheck)

// // if (!numberToCheck || isNaN(numberToCheck)){
// //         alert("Invalid input,please input a number")
// //         location.reload()
// // }
// // else {
// //     if (numberToCheck > 0) {
// //         alert("this number is positve")
// //     }
// //     else if (numberToCheck == 0) {
// //         alert("this number is zero")
// //     }
// //     else if (numberToCheck < 0) {
// //         alert("this number is negative")
// //     }
// // }

// //

// loops in js

// for loop
// while loop
// do ... while loop

// let test = 0;
// for ( test; test <= 100; test++){
//     console.log(test)
// }

// let word = "javascript"


// for (i = 0; i < word.length;i++){
//     console.log(word[i])
// }


let numbers = [45,120,78,34,89,23,103]
largest = 0

for (let i = 0;i < numbers.length;i++){
    if (numbers[i] > largest){
        largest = numbers[i]
    }
    console.log(largest)
}