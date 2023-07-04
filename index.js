// Question:  Given an array of integers and a target value, you must determine which two integers' sum
//            equals the target and return a 2D array. Then merge the array into a single array with sorting (
//            ascending ) order, in the next step double the target value and find again the combination of
//            digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D
//            array.

let array = [1, 3, 2, 2, -4, -6, -2, 8]; // Input Array
let Target = 4; // Target Point
console.log(twoIntegersSum(array, Target)); //  two integers' sum
console.log(mergeSort(array));

function twoIntegersSum(input, target) {
  // Sort the input array in ascending order
  input.sort((a, b) => a - b);

  let result = []; // Array to store the resulting pairs
  let i = 0; // Start index
  let j = input.length - 1; // End index

  while (i < j) {
    // Check if the sum of the two numbers is greater than the target
    if (input[i] + input[j] > target) {
      j--; // Decrement the end index to try a smaller number from the sorted array
    }
    // Check if the sum of the two numbers is less than the target
    else if (input[i] + input[j] < target) {
      i++; // Increment the start index to try a larger number from the sorted array
    }
    // If the sum is equal to the target, add the pair to the result and move both indices
    else {
      result.push([input[i], input[j]]);
      i++;
      j--;
    }
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: an array with 0 or 1 element is already sorted
  }

  // Divide the array into two part
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort the two part
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted part
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both parts and add them to the merged array in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from the left or right half (if any)
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}
