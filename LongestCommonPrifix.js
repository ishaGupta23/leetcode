
strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    if(strs.length == 0){return ""}
     for(let i=0; i<strs[0].length; i++){
         for(let j=1; j<strs.length;j++){
             if(strs[0][i] != strs[j][i]){
                 return strs[0].slice(0,i)
             }
         }
     }
     return strs[0];
     
};
console.log(longestCommonPrefix(strs));