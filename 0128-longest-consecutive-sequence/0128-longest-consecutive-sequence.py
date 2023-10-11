class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        set_nums = set(nums)
        longest_seq = 0
        for val in set_nums:
            if (val-1) not in set_nums:
                length = 0
                while(val+length in set_nums):
                    length +=1
                longest_seq= max(length,longest_seq)
        return longest_seq