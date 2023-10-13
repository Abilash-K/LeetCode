class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()
        for index,value in enumerate(nums):
            if index > 0 and value == nums[index-1]:
                continue
            l,r=index+1,len(nums)-1
            while(l<r):
                total = value + nums[l] + nums[r]
                if (total>0):
                    r = r-1
                elif total<0:
                    l = l+1
                else:
                    result.append([value,nums[l],nums[r]])
                    l = l+1
                    while nums[l]==nums[l-1] and l<r:
                        l= l+1
        return result
