var generateParenthesis = function(n) {
    const result =[];
    helper(result, '', 0, 0, n);
    return result;
};

 var helper = function(result, tempStr, open, close, n){
    if(tempStr.length === n * 2){
        result.push(tempStr);
        return;
    }
    if(open < n)
        helper(result, tempStr + '(', open + 1, close, n);
    if(close < open)
        helper(result, tempStr + ')', open, close + 1, n);
};