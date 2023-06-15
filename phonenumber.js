// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers) {
    var phoneNumber = numbers.join("");
    // console.log(phoneNumber) //did the break work? This checked it

    //recombining
    var joinedNumbers = 
        "(" +
        phoneNumber.substring(0, 3) +
        ") " +
        phoneNumber.substring(3, 6) +
        "-" +
        phoneNumber.substring(6);

    
    console.log(joinedNumbers)

}

createPhoneNumber(numberArray)