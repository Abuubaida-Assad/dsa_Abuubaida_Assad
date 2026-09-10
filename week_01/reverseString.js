// reverse-string
// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};


function solve(nums) {
    const map = new Map();

    for (const x of nums) {
        // check
        if (map.has(x)) {
            // already exists
        }

        // insert/update
        map.set(x, value);
    }

    return map;
}

