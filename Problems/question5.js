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
    //strict comparsion(if passes then well and good for it else need to customise bit)
    if(valueA===valueB) return true;

    //now only case of objects
    const bothObjects = valueA && valueB && typeof valueA === "object" && typeof valueB==="object";

    return  (bothObjects && Object.keys(valueA).length === Object.keys(valueB).length)
        && Object.keys(valueA).every(key => deepEqual(valueA[key], valueB[key]))
  }