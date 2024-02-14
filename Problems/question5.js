/**
 * 
Implement a function deepEqual that performs a deep comparison between two 
values. It returns true if two input values are deemed equal, and returns 
false if not.

You can assume there are only JSON-serializable values (numbers, strings, 
boolean, null, objects, arrays).
There wouldn't be cyclic objects, i.e. objects with circular references.
Examples
    deepEqual('foo', 'foo'); // true
    deepEqual({ id: 1 }, { id: 1 }); // true
    deepEqual([1, 2, 3], [1, 2, 3]); // true
    deepEqual([{ id: '1' }], [{ id: '2' }]); // false
 */

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if(Array.isArray(valueA) && Array.isArray(valueB)){
    return isArrayEqual(valueA, valueB);
  }
  else if(typeof valueA == "object"){
    return toString(valueA) === toString(valueB);
  }
  return Object.is(valueA, valueB);
}

function isArrayEqual(valueA, valueB){
  if(valueA.length != valueB.length){
    return false;
  }
  
  let arrayLength = valueA.length;
  
  for(let index = 0; index < arrayLength; index++){
    if(valueA[index] != valueB[index]) {
      return false;
    }
  }

  return true;
}