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
export default function chunk(array, size = 1) 
{
    let ar = [];
    let ini = 0;
    let initial = array.length / size;
    for (let i = 1; i <= initial; i++) {
      let temp = [];
      for (let j = ini; j < ini + size; j++) {
        temp.push(array[j]);
      }
      ini += size;
      ar.push(temp);
    }
    if (array.length % size !== 0) {
      let temp = [];
      let s = size * ar.length;
      for (let i = s; i < array.length; i++) {
        temp.push(array[i]);
      }
      ar.push(temp);
    }
    return ar;
}
