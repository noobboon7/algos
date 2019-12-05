var removeOuterParentheses = function(S) {
    let level = 0;
    let res = "";
    
    for (str in S) {
        
        if (S[str-1] === "(" && S[str] === "(") {
            level++;
        } else if (S[str-1] === ")" && S[str] === ")") {
            level--;
        }

        if (level > 0) {
            res += S[str];
        }
    }
    
    return res;
};