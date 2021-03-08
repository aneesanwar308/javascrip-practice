function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;
  }
  var testArr = [1,2,3,4,5];
  var newarr= nextInLine(testArr);
  console.log(newarr);

