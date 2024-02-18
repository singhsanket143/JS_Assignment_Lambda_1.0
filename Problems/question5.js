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
    if (typeof valueA != typeof valueB){
      return false;
    }

    if(typeof valueA == 'number' || typeof valueA == 'string' || typeof valueA == 'boolean' || JSON.stringify(valueA) == 'null'){
      return valueA == valueB;
    }

    if (Array.isArray(valueA) == true && Array.isArray(valueB) == true){
      if (valueA.length != valueB.length){
        return false;
      }
      for (let i=0; i<valueA.length; i++){
        deepEqual(valueA[i], valueB[i]);
      }
    }
    
    let valueAKeys = new Set(Object.keys(valueA));
    let valueBKeys = new Set(Object.keys(valueB));

    if (valueAKeys.size != valueBKeys.size){
      return false;
    }

    for (let key of valueAKeys){
      if (!valueBKeys.has(key) || deepEqual(valueA[key], valueB[key])==false){

        return false;
      }
    }
    return true;
  }

