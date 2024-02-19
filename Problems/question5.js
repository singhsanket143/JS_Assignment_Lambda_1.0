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
    //base check
   if(typeof valueA === 'undefined' || typeof valueB === 'undefined') return false;
   if(valueA === null || valueB === null) return valueA === valueB;
   if(typeof valueA !== typeof valueB) return false;

   //Array check
   if(Array.isArray(valueA) && Array.isArray(valueB)) {
    if(valueA.length !== valueB.length) return false;
    for(let i = 0; i < valueA.length; i++){
      if(!deepEqual(valueA[i],valueB[i])) return false;
    }
    return true;
   }

   //object check
   if(typeof valueA === 'object' && typeof valueB === 'object'){
    if(Object.keys(valueA).length !== Object.keys(valueB).length) return false;
      for(const key in valueA){
        if(!deepEqual(valueA[key],valueB[key])) return false;
    }
    return true;
   }

   //primitive check
   return valueA === valueB;
  }