// let number1 = Number(prompt("enter number 1"))
// let number2 = Number(prompt("enter number 2"))

//  const add = (a,b) => a + b

// console.log(add(number1,number2) + 50)

// Write a function isEven(num) that returns true if
// the number is even and false if it's odd.

// function isEven(num){
//   if(num % 2 == 0 && num != 0 ){
//     return true
//   }
//   else{
//     return false
//   }
// }

// console.log(isEven(number1))

// Write a function findMax(a, b, c) that returns the largest of the three numbers.

// const findMax = (a,b,c) => {
//     let arr = [a,b,c]
//     let largest = 0
//     for(i= 0; i < arr.length;i++){
//         if(arr[i] > largest){
//             largest = arr[i]

//         }
//     }
//     return largest
// }

// console.log(findMax(1000,2700,250))

// Write a function reverseString(str) that takes a string and returns the reversed version.

//  const reverseString = function(str){
//    let reverse = ""
//    for(i = str.length - 1; i >= 0 ; i--){
//     reverse += str[i]
//    console.log(reverse)

//    }
//    console.log(reverse)
//  }

// reverseString("hello There")

// Write a function factorial(n) that returns the factorial of a given number.
// function factorial(n){
//     let factorial = 1
//     for(n; n >= 1; n--){
//         factorial *= n
//     }
//     return factorial
// }

// console.log(factorial(10))
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in a given string.

// const countVowels = (str) => {
//   numOfVowels = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === 'e'|| str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u' ) {
//       numOfVowels += 1;
//     }
// }
// console.log(numOfVowels)
// };

// countVowels("peter parker had a parker so it was a parker parker");

// 7. Function to Print Multiplication Table
// Write a function printTable(n) that prints the multiplication table of n.

// function printTable(n){
// for(number = 10; number >= 1;number--){
//     console.log(number * n)
// }
// }
// printTable(5)

// Write a function isPrime(n)
// that returns true if the number is prime and false otherwise.

// function isPrime(n) {
//   let result = "";
//   if (n == 2 || n == 3) {
//     result = "prime number";
//   } else {
//     if (n == 0){
//     result = ' Zero is not prime number'
//     }
//     for (i = n - 1; i > 1; i--) {
//       if (n % i == 0) {
//         result = " not prime number";
//       } else {
//         result = "prime number";
//       }
//     }
// }
// alert(result)
// }

// isPrime(509);

//Write a function square(num) that returns the square of a number.
// function square(num) {
//   console.log(num * num);
// }
// square(4)

// 2. Function to Convert Minutes to Seconds
// Write a function toSeconds(minutes) that converts minutes to seconds
// function toSeconds(minutes){
//   console.log(minutes * 60)

// }
// toSeconds(3)

// 3. Function to Check if a String is a Palindrome
// Write a function isPalindrome(str) that returns true if the string is a palindrome (same forward and backward) and false otherwise
// function isPalindrome(str){
//   let reverse = ""
//   for(i = str.length - 1; i >= 0 ;i--){
//     reverse = reverse + str[i]
//   }
//   console.log(reverse)
//   if(reverse == str){
//     console.log("this is a palidrome")
//   }
//   else{
//     console.log("this is not a palidrome")
//   }
// }
// // isPalindrome("madam")

// 4. Function to Count Words in a Sentence
// Write a function countWords(sentence) that returns the number of words in a given sentence

// function countWords(str){
// let splitSentence = str.split(" ")
// console.log(splitSentence.length)
// }
// countWords("obi went to the river to fetch water")
// js split allow you to split an string in an array

// 5. Function to Find the Smallest Number in an Array
// Write a function findMin(arr) that returns the smallest number from an array of numbers
// function findSmall(arr){
// smallest = arr[0]
// for(i = 0; i < arr.length; i++ ){
//     if(smallest > arr[i]){
//         smallest = arr[i]
//     }
// }
// console.log(smallest)
// }
// findSmall([100, 200, 50, 300, 400])


// 6. Function to Merge Two Arrays
// Write a function mergeArrays(arr1, arr2) that merges two arrays into one
// function mergeArrays(arr1, arr2){
// console.log(arr1 +","+ arr2)
// }
// mergeArrays([1,2,4,6,8] ,[3,6,7,9])

// 7. Function to Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that removes duplicate values from an array.
// function removeDuplicate(arr){
// for(i = 0; i < arr.length; i++)
//         for(a = 0; a < arr.length;a++){
//             if(i != a && arr[i] == arr[a]){
//                 arr.splice(i,1)
//             }
//         }
//         console.log(arr)
// }
// removeDuplicate([1,2,3,4,4,5,6])

// 8. Function to Check if a Number is a Perfect Square
// Write a function isPerfectSquare(num) that returns true if the number is a perfect square, otherwise false
// function isPerfectSquare(num){
//     const sqrt = Math.sqrt(num)
//     console.log(sqrt)
//     console.log(Math.round(sqrt))
//     if(sqrt == Math.floor(sqrt)){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// isPerfectSquare(49)

// 1. Function to Calculate the Power of a Number*  
// Write a function power(base, exponent) that returns the result of base raised to exponent.  

function power(base,exponent) {
    console.log(base ** exponent)
}

power(8,9087)