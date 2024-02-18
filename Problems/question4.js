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

//-----------------------------my first solution--------------------------------
export default function chunk(array, size = 1) {
    const result = [];
    
    for (let index = 0; index <= array.length; index = index + size) {
        let temp = []; 

        if(index >= array.length) break;

        for (let s = index; s < (index+size); s++) {
            if(!array[s]) break;
            temp.push(array[s]);
        }

        result.push(temp);
    }

    return result;
}

console.log(chunk([1,2,3,4,5,6,7,8,9], 3));

//--------------------------efficient solution after doing browsing internet-----------------
function chunkEfficient(array, size = 1) {
    const result = [];
    let index = 0;
    
    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }

    return result;
}

console.log(chunkEfficient([1,2,3,4,5,6,7,8,9], 3));