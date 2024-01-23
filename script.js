// To get Cubic Value of provided number
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please, Provide a number";
  } else {
    const cube = number * number * number;
    return cube;
  }
}
// console.log(cubeNumber(3));



// To match value of two string
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Both of two inputs must be string";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}
// console.log(matchFinder('John Doe', 'ohn'));



// To arrange in descending order 
function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] == arr[1]) {
    return "equal";
  } else {
    let descendingArray = [];
    if (arr[0] > arr[1]) {
      descendingArray.push(arr[0]);
      descendingArray.push(arr[1]);
    } else {
      descendingArray.push(arr[1]);
      descendingArray.push(arr[0]);
    }
    return descendingArray;
  }
}
// console.log(sortMaker([2,3]))



// Find Object's Value
function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  return street + "," + house + "," + society;
}

// console.log(findAddress({street:10, society:'Earth Perfect'}));




// Affordability of buying something  
function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "Empty Wallet";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const element = changeArray[i];
      sum = sum + element;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
// console.log(canPay([1,1,3],10))
