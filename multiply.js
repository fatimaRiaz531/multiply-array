//  Q : Write a function multiplies the elements of arrays by 2 and return the modified array.
//  solution:
function multiplyByTwo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input should be an array");
    }
    var result = arr.map(function (x) { return x * 2; });
    return result;
}
var inputArray = [1, 2, 3, 4, 5];
var modifiedArray = multiplyByTwo(inputArray);
console.log(modifiedArray);
// EXAMPLE:
var nums = [1, 2, 3];
function multiplies(nums) {
    for (var index = 0; index < nums.length; index++) {
        nums[index] = nums[index] * 2; // Assign the result back to the array
    }
    return nums;
}
console.log(multiplies(nums)); // Output: [2, 4, 6]
