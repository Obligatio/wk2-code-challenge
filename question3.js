// Define a function to find prime numbers within a specified range
function prime(num1, num2) {
    // Initialize an empty array to store prime numbers
    var primes = [];

    // Loop through numbers from 'num1' to 'num2'
    for (var num = num1; num <= num2; num++) {
        // Assume the number is prime until proven otherwise
        var isPrime = true;

        // Check if the number is greater than 1
        if (num > 1) {
            // Check for factors from 2 to the number itself - 1
            for (var i = 2; i < num; i++) {
                // If the number is divisible by any other number, it's not prime
                if (num % i === 0) {
                    isPrime = false;
                    // Break the loop as soon as a factor is found
                    break;
                }
            }
        } else {
            // 1 is not a prime number
            isPrime = false;
        }

        // If the number is prime, add it to the 'primes' array
        if (isPrime) {
            primes.push(num);
        }
    }

    
    return primes;
}

//Example:
var primesInRange = prime(1, 10);

// Print the array containing the prime numbers within the specified range
console.log("Prime numbers:", primesInRange);