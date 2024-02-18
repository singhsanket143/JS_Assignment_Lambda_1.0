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
  if (valueA === valueB) {
    return true;
  }

  if (
    valueA === null ||
    valueA === undefined ||
    valueB === null ||
    valueB === undefined
  ) {
    return valueA === valueA;
  }

  if (typeof valueA !== "object" || typeof valueB !== "object") return false;

  if (
    Array.isArray(valueA) &&
    Array.isArray(valueB) &&
    valueB.length !== valueA.length
  ) {
    return false;
  }

  let keysOfValueA = Object.keys(valueA);
  let keysOfValueB = Object.keys(valueB);

  if (keysOfValueA.length !== keysOfValueB.length) {
    return false;
  }

  for (let key of keysOfValueA) {
    if (valueA[key] !== valueB[key] || !deepEqual(valueA[key], valueB[key]))
      return false;
  }
  return true;
}
