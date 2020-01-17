import { createBrotliCompress } from "zlib";


export const decodedValue = (arr) => {
  let clrsArr = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'];
  let formatArr = clrsArr.map(clr => clr.toLowerCase());
  let pairs = {};
  for(let i in formatArr){
    return pairs[formatArr[i]] = i;
  }
  console.log(pairs)
  // arr.forEach(clr => {
  //   if(clr === '')
  // });
};
