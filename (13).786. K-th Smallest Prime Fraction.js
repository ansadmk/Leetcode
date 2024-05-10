/*
You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.

For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].

Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

 

Example 1:

Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.

Example 2:

Input: arr = [1,7], k = 1
Output: [1,7]

 

Constraints:

    2 <= arr.length <= 1000
    1 <= arr[i] <= 3 * 104
    arr[0] == 1
    arr[i] is a prime number for i > 0.
    All the numbers of arr are unique and sorted in strictly increasing order.
    1 <= k <= arr.length * (arr.length - 1) / 2

 
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let n = arr.length;
    let ans = [0, 1];
    let l = 0;
    let r = 1;

    while (true) {
      let m = (l + r) / 2;
      ans[0] = 0;
      let count = 0;
      let j = 1;

      for (let i = 0; i < n; i++) {
        while (j < n && arr[i] > m * arr[j]) {
          j++;
        }
        count += n - j;
        if (j === n) {
          break;
        }
        if (ans[0] * arr[j] < ans[1] * arr[i]) {
          ans[0] = arr[i];
          ans[1] = arr[j];
        }
      }

      if (count < k) {
        l = m;
      } else if (count > k) {
        r = m;
      } else {
        return ans;
      }
    }
};