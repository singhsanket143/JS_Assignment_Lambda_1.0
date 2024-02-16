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

        // Check if both values are strictly equal
        if (a === b) {
            continue;
        }

        // Check if both values are objects and not null
        if (typeof a === 'object' && a !== null &&
            typeof b === 'object' && b !== null) {

            // Check if both objects have the same number of keys
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);

            if (keysA.length !== keysB.length) {
                return false;
            }

            // Check and push each key-value pair to the stack
            for (const key of keysA) {
                if (!keysB.includes(key)) {
                    return false;
                }
                stack.push({ a: a[key], b: b[key] });
            }
        } else {
            // If values are not objects or arrays, return false
            return false;
        }
    }

    // If no mismatches are found, return true
    return true;
}