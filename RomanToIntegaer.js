var romanToInt = function(s) {
    
    let myMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        
        const curr =myMap [s[i]];
        const next =myMap[s[i+1]];
               //if the next roman no. is larger, then we  subtract this number
       if(curr < next)
       {
           result += next - curr;
           //i++
       }else{
                  //otherwise, add like no.
       result += curr +next;
       }
     
           
    }
    return result;
    
};
console.log(result);