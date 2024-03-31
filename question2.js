f// Function to generate an array.
function generate(num1, num2) {
    // Determine the minimum and maximum numbers
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    const result = []; // Initialize an empty array

    
    for (let i = min; i <= max; i++) {
        result.push(i); // Add the current number to the result array
    }

    return result; // Return the generated array
}

// Example
console.log(generate(-4, 7));
;