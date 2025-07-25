/**
 * The Fibonacci Sequence is a sequence where each number
 * is the sum of the two numbers preceeding it in the series. The sequence 
 * starts as 0, 1, 1, 2. 
 * The sequence is normally used for positive numbers.
 */

/**
 * The function stops calling itself when the value
 * of the argument is 0 or 1. It continues to make
 * recursive calls when the base case is not reached
 * and returns the correct number from the sequence, that is
 * the sum of the two numbers that are before the argument.
 * @param number: whole integer
 * @return: an array representing the sequence
 */
const fibonacciRec = (number) => {
    // Base case to stop the recursive call
    if (number === 0) {
        return [];
    } else if (number === 1) {
        return [0];   
    } else if (number === 2) {
        return [0, 1];
    }

    // Recursive call 
    let sequence = fibonacciRec(number - 1);
    let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);

    return sequence;   
}

console.log(fibonacciRec(8));

/**
 * Uses iteration to return the sequence of a 
 * Fibonacci series given a number
 */
const fibonacciIt = (number) => {
    let sequence = [];
    
    // Base case
    if (number === 0) {
        return sequence;
    } else if (number === 1) {
        sequence.push(0);
        return sequence;
    } else {
        // Add the first to values manually
        sequence.push(0);
        sequence.push(1);

        for (let i = 2; i < number; i++) {
            let value = sequence[i - 1] + sequence[i - 2];
            sequence.push(value);
        }
        return sequence;
    }
      
}
console.log(fibonacciIt(8));