// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
 var a=prompt(parseInt("enter a number"));
 var b=prompt(parseInt("enter a number"));
alert (compareEquality(a,b));