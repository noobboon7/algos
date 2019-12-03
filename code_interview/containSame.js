let arr1 = ["a", "b", "c", "z"];
let arr2 = ["a", "h", "1", "x"];

// goning to be O(n^2)
const containsCommonItem = (arr1, arr2) => {
    for(let i=0; i < arr1.length; i++) {
        for(let j=0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
};

// Creating a hash map to find solution 
const containsCommonItem2 = (arr1, arr2) => {
    let map = {};
    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }
    for(let j= 0; j< arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
};

// implementing javascript functions to solve if items in array contain the same element

const containsCommonItem3 = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item));
};


console.log(containsCommonItem(arr1, arr2));
console.log(containsCommonItem2(arr1, arr2));
console.log(containsCommonItem3(arr1, arr2));