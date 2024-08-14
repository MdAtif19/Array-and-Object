let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
    array.push(number);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(array) {
    const sum = calculateSum(array);
    return array.length > 0 ? sum / array.length : 0;
}

console.log("Original Array:", numbers);

addNumber(numbers, 4);
console.log("After adding 4:", numbers);

removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

const sortedNumbers = sortNumbers(numbers);
console.log("Sorted Array:", sortedNumbers);

const sum = calculateSum(numbers);
console.log("Sum of the Array:", sum);

const average = calculateAverage(numbers);
console.log("Average of the Array:", average);
