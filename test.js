//Write for me Level 1 javascript, title, question and asnwer with comment.

//►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►
//FUNCTION FUNCTION_NAME FUNCTION_VARIABLE
function squareNumber(num) {
    console.log("Question 01: Find the Square of a Number") //const declare a variable that cannot be changed 
    const square = num ** 2;// Use the `**` operator to calculate the square
    return square; // Return the result
  } // Example usage:
  const result1 = squareNumber(4); // Call the function with the value 4
  console.log("Answer:",result1); // Expected output: 16

//►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►►
  function reverseString(str) {
    console.log("Question 02: Reverse a String Using JavaScript")
    return str.split('').reverse().join('');// Use the `split`, `reverse`, and `join` methods to reverse the string
  }
  const result2 = reverseString("hello");  // Example usage:
  console.log(result2); // Expected output: "olleh"
  