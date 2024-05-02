/*
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

 

Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.

Example 2:

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.

 

Constraints:

    1 <= nums.length <= 1000
    -1000 <= nums[i] <= 1000
    nums[i] != 0


*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  const temp=[]
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (j!=i && Math.abs(nums[i])==nums[j] && Math.sign(nums[i])==-1) {
          temp.push([nums[i],nums[j]])
        }
    }
    
  }
  return temp.length!=0 ? temp.sort((a,b)=>a[1]-b[1])[temp.length-1][1] : -1
  
};
console.log(findMaxK([-1,2,-3,3,-10,10]));