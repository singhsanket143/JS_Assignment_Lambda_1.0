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
  if (
    valueA &&
    valueB &&
    typeof valueA == "object" &&
    typeof valueB == "object"
  ) {
    
    let keys1 = Object.keys(valueA);
    let keys2 = Object.keys(valueA);
    let values1 = Object.values(valueA);
    let values2 = Object.values(valueB);
    if (keys1.length != keys2.length || values1.length != values2.length)
      return false;
    for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] != keys2[i]) return false;
    }
    for (let i = 0; i < values1.length; i++) {
      if (values1[i] != values2[i]) return false;
    }
    return true;
  }
  return valueA === valueB;
  throw "Not implemented!";
}
