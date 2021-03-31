var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString);
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars, candyString];
}
// should NOT alter the original array 

function destructivelyAddElementToEndOfArray (chocolateBars, candyString) {
  chocolateBars.push(candyString);
  return chocolateBars
}
// should atler the original array 

function accessElementInArray(array,index) {
  return array[index];
}

function 