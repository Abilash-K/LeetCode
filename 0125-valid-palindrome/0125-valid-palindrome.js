/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l =0
    let r = (s.length)-1
    while(l<r){
        while(l<r && !reGex(s[l])){
            l+=1
        }
        while(r>l && !reGex(s[r])){
            r-=1
        }
        if(s[l].toLowerCase()!=s[r].toLowerCase()){
            return false

        }
        l+=1
        r-=1
    }return true

    
};
function reGex(c){
    pattern = new RegExp("[a-zA-Z0-9]")
    return pattern.exec(c)

}