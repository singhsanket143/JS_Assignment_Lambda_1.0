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

    let cnt=1;
    let finalArray=[];
    let tempArray=[];
    for(let el of array){

        tempArray.push(el);
        if(cnt%size==0){

            finalArray.push(tempArray);
            tempArray=[];
        }
        cnt++;
    }
    if(tempArray.length>0){
        finalArray.push(tempArray);
    }
    return finalArray;

    throw 'Not implemented!';
  }