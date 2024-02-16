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
  const stack = [{ a: valueA, b: valueB }];

  while (stack.length > 0) {
      const { a, b } = stack.pop();
      if (a === b) {
        continue;
      }
      if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
          
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }
        for (const key of keysA) {
          if (!keysB.includes(key)) {
              return false;
          }
          stack.push({ a: a[key], b: b[key] });
        }
      } else {
        return false;
      }
  }
  return true;
}