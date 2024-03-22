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
  if (valueA === valueB) return true;
  if (
    valueA == null ||
    typeof valueA != "object" ||
    valueB == null ||
    typeof valueB != "object"
  )
    return false;
  let keysA = Object.keys(valueA),
    keysB = Object.keys(valueB);
  let valuesA = Object.values(valueA),
    valuesB = Object.values(valueB);
  if (keysA.length != keysB.length) return false;
  for (let i = 0; i < keysA.length; i++) {
    if (keysA[i] === keysB[i]) {
      if (valueA[i] !== valueB[i]) return false;
    }
    else return false;
  }
  return true;;
}
