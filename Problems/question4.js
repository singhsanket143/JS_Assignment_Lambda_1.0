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

function splitArrayElements(
  itr,
  size,
  flag,
  temp,
  tempSize,
  arraySize,
  newArray,
  array
) {
  while (itr < arraySize) {
    if (flag == true) {
      /**flag ==true indicates that itr has being modified and we also don't want the below
       *  if condition executes as on the previous iteration we  updated itr so and we want else condition should be executes so we are 
       * balancing itr by increment it's value
       * eg. as itr=4 originally it was 5 so to balance value of itr
       * itr=5 so else condition is executed and remaing elements are splited
       * the significance of flag is used to handle this kind of edge case:
       * array=[1,2,3,4,5] size=2 -->newArray=[[1,2],[3,4]]  to indert [5] into newArray we have to execute else conditon
       * such that we get the output --?newArray=[[1,2],[3,4],[5]]
       */
      itr = itr + 1;
    }
    if (itr < tempSize) {
      //here we are inserting elements into temp array with the specified size eg. size=2 then temp=[1,2]
      temp.push(array[itr]);
      itr++;
    } else {
      //if we are here it means temp array is full so we will push temp array into newArray eg.temp=[1,2]-->newArray=[[1,2]]
      newArray.push(temp);

      temp = [];//to split remaining elements of array we will make temp array empty so that it can contain next 2 elements
      tempSize = tempSize + size;/*updating tempSize as itr is updated and is not equal to 0 
      and we are dependent on itr to access each element and to find next 2 elements to be placed in temp array we have to update tempsize*/


      if (tempSize > arraySize && flag == false) {
        /**
         * there can be a case when while updating tempsize it can execeed arraySize and we don't want this to happen as there exist no
         * such elements after last index of original array.
         * eg.assuming tempSize=6 arraySize=5 so what we want is temp so to keep tempsize in range 
         * we are updating tempSize from 6 to 5.
         * 
         * 
         */
        tempSize = tempSize - (tempSize - arraySize);
      }
    }

    if (itr == arraySize) {
      /**there can be a chance that itr becomes arraySize and if this happens next iteration of while loop won't
       * execute and we can't split all elements of array so for handling case for last index we are modifying itr to it's previous value
       * so that on next iteration while does not terminates and we can split remainig elements of array and
       *  as we are modying itr so we are updating flag to true
       * 
       * eg. itr=5 and arraySize=5
       * so itr=4
       */
      itr = itr - 1;
      flag = true;
    }
  }
  return newArray;
}
export default function chunk(array, size = 1) {

  //-----------------variable initialization-----------------
  let arraySize = array.length; // finding size of orriginal array
  let itr = 0;//it will be used to iterate every index of original array

  let temp = [];//Initialising an emoty array which we will be using later to fill elements after spliting
  let tempSize = size;//Defining size of that temp array with the size accoring to which we have to split elements of array
  let newArray = [];//This array will contain our final output
  
  let flag = false;//the flag variable is used to stop termination of while loop when itr becomes arraySize




  //-----------------validating base condition or edge cases---------------------
  if (arraySize == 0) {//returning empty array as original array is empty
    return [];
  }

  if (arraySize < size) {/*if size of original array is less tha size the it means we cannot split elements 
    so we will just our original array into newArray eg: size=3 and array=[1,2] then newArray=[[1,2]]*/
    newArray.push(array);
    return newArray;
  }

  //--------------spliting elements  -------------------
  newArray = splitArrayElements(
    itr,
    size,
    flag,
    temp,
    tempSize,
    arraySize,
    newArray,
    array
  );
  return newArray;
}
