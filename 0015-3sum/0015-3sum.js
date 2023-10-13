/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
        let result = [];
        nums.sort((a, b) => a - b);
        for (let index = 0; index < nums.length; index++) {
            if (index > 0 && nums[index] === nums[index - 1]) {
                continue;
            }
            let l = index + 1;
            let r = nums.length - 1;
            while (l < r) {
                let total = nums[index] + nums[l] + nums[r];
                if (total > 0) {
                    r--;
                } else if (total < 0) {
                    l++;
                } else {
                    result.push([nums[index], nums[l], nums[r]]);
                    l++;
                    while (nums[l] === nums[l - 1] && l < r) {
                        l++;
                    }
                }
            }
        }
        return result;
};