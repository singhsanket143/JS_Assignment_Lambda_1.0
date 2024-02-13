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

const isSameObject = (source, target) => {
  return Object.entries(source).find(data => (data[1] !== target[data[0]])) ? false : true
}
/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(source, target) {
  const find_type = typeof (source);
  if (Array.isArray(source)) {
    const isObject = typeof (source[0]) !== 'object';
    return !(source.find((data, index) => handleAsPerTypeFunc(isObject, data, target, index)))
  } else if (find_type === 'object' && source !== null) {
    return Boolean(isSameObject(source, target))
  } else {
    return source === target
  }
}

function handleAsPerTypeFunc(isObject, data, target, index) {
  return isObject ? data !== target[index] : !isSameObject(data, target[index]);
}
