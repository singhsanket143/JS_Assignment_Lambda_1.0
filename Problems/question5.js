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
 *
 * */
let isPrimitive = (val) => {
  if (val === null) {
    console.log(true);
    return;
  }

  if (typeof val == "object" || typeof val == "function") {
    return false;
  } else {
    return true;
  }
};

export default function deepEqual(x, y) {
  if (x === y) {
    //for handling primitive types
    return true;
  } else if (
    typeof x == "object" &&
    x != null &&
    typeof y == "object" &&
    y != null
  ) {
    if (Object.keys(x).length != Object.keys(y).length) return false; //if number of keys are not same then objects are not equal

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        /*checking both object have same key or not ,if both objects have differrent
       keys then objects are not equal*/

        if (!deepEqual(x[prop], y[prop])) return false;
        //if value of both keys are not equal then objects are not equal
      } else return false;
    }

    return true;
  } else return false;
}
