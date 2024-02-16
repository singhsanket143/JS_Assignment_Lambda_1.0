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
  // for different data type
  if (typeof valueA !== typeof valueB) return false;

  // for primitive values
  if (typeof valueA !== "object" || valueA === null || valueB === null)
    return valueA === valueB;

  // for array
  if (Array.isArray(valueA)) {
    if (valueA.length != valueB.length) return false;

    let len = valueA.length;
    for (let idx = 0; idx < len; idx++) {
      if (!deepEqual(valueA[idx], valueB[idx])) return false;
    }
    return true;
  }
  // for object
  else {
    const key1 = Object.keys(valueA);
    const key2 = Object.keys(valueB);

    if (key1.length != key2.length) return false;
    for (const key of key1) {
      if (!deepEqual(valueA[key], valueB[key])) return false;
    }
    return true;
  }
}
