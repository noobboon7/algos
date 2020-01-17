import { createBrotliCompress } from "zlib";


// copy pasta'd to lazy to format
let clrsArr = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'];
const formatArr = clrsArr.map(clr => clr.toLowerCase());
const colorCode = (color) => formatArr.indexOf(color);
export const decodedValue = ([a,b]) => colorCode(a) *10 + colorCode(b);
