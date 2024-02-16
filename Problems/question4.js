/**
 * 
Implement a function chunk(array, [size=1]) that splits the input array into groups of length size 
and returns them within a new array. If array can't be split evenly, the final chunk will be the 
remaining elements. The function should not modify the original input array.

Arguments
    array (Array): The array to process.
    [size=1] (number): The length of each chunk.
Returns
    (Array): Returns the new array of chunks.

Examples
    chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
    chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
    chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
    The function should return an empty array if the array argument is empty.

Read more about it here: https://lodash.com/docs/#chunk
 */


/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */

/*
export default function chunk(array, size = 1) {
    let result = [];
    if (size === undefined || size === null || size<=0) {
        size = 1;
    }
    let i = 0;
    while (i < array.length) {
    //can be done using Array.slice because it return copy of portion
        let temp = [];
        for (let j = i; j < Math.min(size + i, array.length); j++) {
            temp.push(array[j]);
        }
        result.push(temp);
        i += size;
    }
    return result;
}
*/
export default function chunk(array, size = 1) {
    let result = [];
    if (size === undefined || size === null || size <= 0) {
        size = 1;
    }

    for (let i = 0; i < array.length; i+=size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}