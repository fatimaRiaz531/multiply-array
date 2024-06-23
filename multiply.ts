//  Q : Write a function multiplies the elements of arrays by 2 and return the modified array.

//  solution:


function multiplyByTwo(arr:number[]): number[] {
    if (!Array.isArray(arr)){
        throw new Error("Input should be an array");
    }
    const result = arr.map(x => x * 2);
    return result;
   
}
const inputArray = [1,2,3,4,5];
const modifiedArray = multiplyByTwo(inputArray);
console.log(modifiedArray);


// EXAMPLE:

let nums: number[] = [1, 2, 3];

function multiplies(nums: number[]): number[] {
    for (let index = 0; index < nums.length; index++) {
        nums[index] = nums[index] * 2;  // Assign the result back to the array
    }
    return nums;
}

console.log(multiplies(nums));  // Output: [2, 4, 6]

