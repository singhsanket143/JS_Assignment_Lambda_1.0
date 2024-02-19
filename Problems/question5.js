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
  // Check for strict equality first
  if (valueA === valueB) return true;

  // for null and undefined values
  if (valueA === null || valueB === null || typeof valueA === 'undefined' || typeof valueB === 'undefined') {
    return valueA === valueB;
  }

  // Checking they are of different types
  if (typeof valueA !== typeof valueB) return false;

  // Compare primitive types directly
  if (typeof valueA === 'string' || typeof valueA === 'number' || typeof valueA === 'boolean') {
    return valueA === valueB;
  }

  // Compare if they are arrays
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    if (valueA.length !== valueB.length) return false; //if length not equal then array will also not equal
    for (let i = 0; i < valueA.length; i++) {
      if (!deepEqual(valueA[i], valueB[i])) return false; //not checking each element of array taht they are equal or not
    }
    return true;
  }

  // Compare objects
  if (typeof valueA === 'object' && typeof valueB === 'object') {
    const keysA = Object.keys(valueA);
    const keysB = Object.keys(valueB);
    if (keysA.length !== keysB.length) return false; //if no. of keys not equal then object also not equal with each other
    for (const key of keysA) { //for each key comparing now values
      if (!deepEqual(valueA[key], valueB[key])) return false;
    }
    return true;
  }

  //in last that means not valid cases comparing so return false
  return false;
}
