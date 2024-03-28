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
  if (valueA == null || valueB == null) {
    return (valueA == null && valueB == null);
  }
  if(typeof(valueA) != typeof(valueB)) return false;
  if(valueA.length != valueB.length) return false;
  if(typeof(valueA) == 'object') {
    if(Array.isArray(valueA) != Array.isArray(valueB)) {
      return false;
    }
    if(Array.isArray(valueA)) {
      for (let i = 0; i < valueA.length; i++) {
        if (!deepEqual(valueA[i], valueB[i])) {
          return false;
        }
      }
    } else {
      let keySet1 = Object.keys(valueA);
      let keySet2 = Object.keys(valueB);
      if(keySet1.length != keySet2.length) return false;
      for(let i = 0; i < keySet1.length; i++) {
        if (!deepEqual(valueA[keySet1[i]], valueB[keySet1[i]])) {
          return false;
        }
      }
    }
  } else {
    if(valueA != valueB) {
      return false;
    }
  }
  return true;
}