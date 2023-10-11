import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l,r=0,len(s)-1
        while(l<r):
            while(l<r) and not self.isalphaNum(s[l]):
                l+=1
            while(r>l) and not self.isalphaNum(s[r]):
                r-=1
            if(s[l].lower()!=s[r].lower()):
                return False
            l,r=l+1,r-1
        return True




        
    def isalphaNum(self,c):
        pattern = re.compile(r'[a-zA-Z0-9]')
        return  bool(pattern.match(c))