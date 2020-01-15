//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  let rst;
  switch(color){
    case "black": 
    rst = 0
    break;
    case 'brown': 
    rst = 1 ;
    break;
    
    case 'red': 
    rst = 2 ;
    break;
    
    case 'orange': 
    rst = 3 ;
    break;
    
    case 'yellow': 
    rst = 4 ;
    break;
    
    case 'green': 
    rst = 5 ;
    break;
    
    case 'blue': 
    rst = 6 ;
    break;
    
    case 'violet': 
    rst = 7 ;
    break;
    
    case 'grey': 
    rst =  8 ;
    break;
    
    case 'white': 
    rst = 9;
    break;
  }
  return rst
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
