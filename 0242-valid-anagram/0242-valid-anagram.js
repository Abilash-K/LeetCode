/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false
    }
    let countS={}
    let countT={}
    for(let i=0;i<s.length;i++){
        countS[s[i]] = (countS[s[i]] || 0) + 1
        countT[t[i]] = (countT[t[i]]||0)+1
    }
    for(let c in countS){
        if(countS[c]!=(countT[c] || 0)){
            return false
        }
        
    }
    return true
    
};