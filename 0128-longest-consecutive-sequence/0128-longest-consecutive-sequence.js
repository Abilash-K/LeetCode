/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const nums_set = new Set(nums)
    let longest = 0
    let len = 0
    for(let i of nums_set){
        if(!(nums_set.has(i-1))){
            len = 0
            while(nums_set.has(i + len)){
                len +=1
            }
        }
        longest = len>longest ? len : longest
    }
    return longest
};