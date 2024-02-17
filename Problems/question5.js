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
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    if (valueA.length != valueB.length) return false;
    return valueA.every((element, index) => {
      return element === valueB[index];
    });
  }
  if (typeof valueA == "object" && typeof valueB == "object") {
    let key1 = Object.keys(valueA);
    let key2 = Object.keys(valueB);
    if (key1.length != key2.length || !key1.every((key) => key2.includes(key)))
      return false;
    for (let key in valueA) {
      if (valueA[key] !== valueB[key]) return false;
    }
    return true;
  }
  return false;
}
