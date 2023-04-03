/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    // A -> (0*26) + (65-64), 
    // B -> (1*26) + (66-64),
    // c -> (28*26) + (67-64)

    let sum=0;
    for(let i=0; i<columnTitle.length; i++){
        sum = (sum * 26) + (columnTitle.charCodeAt(i)-64)
    }
    return sum
 // console.log(sum);
};