/*Task
We define S to be a sequence of distinct sequential integers from 1 to n ; in other words, S = {1,2,3,....,n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a<b), in sequence S that is also less than a given integer, k.
Complete the function in the editor so that given n and k, it returns the maximum .
Note: The  symbol represents the bitwise AND operator. 
*/

function getMaxLessThanK(n, k) {
    var max = 0;
    for(var a = 1; a < n; a++) {
        for(var b = a+1; b < n+1; b++){
            if((a&b) < k && (a&b) > max) {
                max = (a&b);
            }
        }
    }
    return max
} 
