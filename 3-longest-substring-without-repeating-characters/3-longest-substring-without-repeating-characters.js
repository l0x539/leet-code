/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    return s.split('').reduce((prev, c) => {
        curr = prev.current
        prev.current += c
        
        if (curr.includes(c)) {
            prev = {current: curr.split(c)[1] + c, longest: prev.longest}
        }
        
        if (prev.current.length > prev.longest )
            prev.longest = prev.current.length
        
        return prev
    }, {current: '', longest: 0}).longest
};