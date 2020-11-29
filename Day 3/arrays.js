/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest (nums) {
  // Complete the function

  let maxi = Math.max(...nums);
  nums.splice(nums.indexOf(maxi), 2);

  let secondMax = Math.max(...nums);
  return secondMax;
}



