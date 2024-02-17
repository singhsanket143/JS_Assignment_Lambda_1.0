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
    /**
     * resources used
     * https://www.javatpoint.com/shallow-copy-and-deep-copy-in-javascript#:~:text=ADVERTISEMENT-,In%20JavaScript%2C%20there%20are%20two%20ways%20to%20copy%20objects%3A%20shallow,and%20nested%20objects%20or%20arrays.
     */

    return JSON.stringify(valueA)===JSON.stringify(valueB);

  }