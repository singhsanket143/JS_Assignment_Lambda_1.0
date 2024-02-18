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
  const isType = type(valueA, valueB);

  if(isType) {
    switch(isType) {
      case 'string': 
        return valueA === valueB;
      case 'number': 
        return valueA === valueB;
      case 'boolean': 
        return valueA === valueB;
      case 'object': 
        return JSON.stringify(valueA) === JSON.stringify(valueB);
    }
  } else {
    console.log('Both values are not of the same type');
    return false;
  }
}

console.log(deepEqual({a: '1', b: '2'}, {a: '1', b: '2'}));

//---utility functions

//-------------to check the types---------------
function type(a, b) {
    return typeof a === typeof b ? typeof a : false;
} 