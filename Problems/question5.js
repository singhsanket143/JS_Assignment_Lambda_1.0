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

function compareObject(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(function cb(key, idx) {
    return deepEqual(key, keys2[idx]) && deepEqual(obj1[key], obj2[key]);
  });
}

function compareArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(function cb(element, idx) {
    return deepEqual(element, arr2[idx]);
  });
}

export default function deepEqual(valueA, valueB) {

  if (typeof valueA !== typeof valueB) {
    return false;
  }

  if (Array.isArray(valueA)) {
    return compareArray(valueA, valueB);
  } else if (typeof valueA === 'object' && valueA !== null) {
    return compareObject(valueA, valueB);
  }

  return valueA === valueB;

}