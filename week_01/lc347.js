// https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let map = new Map();
    for (let num of nums){
        map.set(num,map.get(num)+1||1)
    }
    let result = [];
    for (let [key,value]of map){
        result.push([key,value]);
    }
    result.sort((a,b)=> b[1]-a[1]);
    return result.slice(0,k).map((x) => x[0])
};





