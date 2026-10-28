// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n=nums.length;
    let leftProducts = new Array(n).fill(1);
    let rightProducts = new Array(n).fill(1);
    let result = new Array(n).fill(0);
    for(let i=1;i<n;i++){
        leftProducts[i]=leftProducts[i-1]*nums[i-1];
    
    }
    for(let i = n-2; i>=0;i--){
        rightProducts[i]= rightProducts[i+1]*nums[i+1];
    }
    for (let i=0;i<n;i++){
        result[i] = leftProducts[i]*rightProducts[i]
    }
    return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const n = matrix.length;
for (let i = 0; i < n; i++) {
  console.log(matrix[i][n - 1 - i]);
}



