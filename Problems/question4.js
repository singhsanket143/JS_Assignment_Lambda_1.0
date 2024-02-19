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
export default function chunk(array, size = 1) {
    if(array.length === 0) return []; 
    let Array_length = array.length;
    let chunk_size = size;
    let proper_chunks = Math.floor(Array_length/chunk_size);
    let improper_chunks = 1;
    let total_chunks = proper_chunks + improper_chunks;
    let ans = []; 
    let counter = 0;
    //filling chunks inside ans array.
    for(let i = 0; i < total_chunks; i++){
        let subArr = [];
        if(i < proper_chunks){
            for(let j = 0; j < chunk_size; j++){
                subArr.push(array[counter]);
                counter++;
            }
        }else{
            while(counter < Array_length){
                subArr.push(array[counter]);
                counter++;
            }
        }
        ans.push(subArr);
    }
    // console.log(ans);
    return ans;
  }