// Define a function named swap
function swap(inputString) {
    // Split the input string into an array of characters
    return inputString
        .split('')
        // Map over each character of the array
        .map(char => {
            // Check if the character is uppercase
            if (char === char.toUpperCase()) {
                // Convert uppercase character to lowercase
                return char.toLowerCase();
            } else {
                // Convert lowercase character to uppercase
                return char.toUpperCase();
            }
        })
        // Join the array of characters back into a string
        .join('');
}

// Example 
const inputStr = 'The Quick Brown Fox';
// Call the swap function 
const outputString = swap(inputStr);
// Print in console
console.log(outputString);