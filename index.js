// BINARY SEARCH: JAVASCRIPT

/**
 * 
 * @param {Array} arr 
 * @param {number} target 
 * @returns {number|null}
 */

// Iterative Binary Search:
const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (rightIndex >= leftIndex) {
        console.log(`Left index: ${leftIndex}, Right index: ${rightIndex}`);
        const indexToCheck = Math.floor((leftIndex + rightIndex) / 2);
        const indexValue = arr[indexToCheck];
        console.log(`indexToCheck: ${indexToCheck} = ${arr[indexToCheck]}`);

        if (indexValue === target) {
            return indexToCheck;
        } else if (target > indexValue) {
            leftIndex = indexToCheck + 1;
        } else {
            rightIndex = indexToCheck;
        }
    }
    return null;
}

const array = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 94;

const targetIndex = binarySearch(array, target);
console.log(`The target index is ${targetIndex}.`);
