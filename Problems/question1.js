/**
 * Implement a function functionLength, to return the number of 
 * parameters a function expects. Note that this is a static value 
 * defined by the function, not the number of arguments the function 
 * is called with (which is determined by arguments.length
 * 
 *  Example:
    function foo() {}
    function bar(a) {}
    function baz(a, b) {}

    functionLength(foo); // 0
    functionLength(bar); // 1
    functionLength(baz); // 2
 */

//custom-tests
const test1 = () => {};
const test2 = (a) => {};
const test3 = (a, b) => {};

export default function functionLength(fn) {
    console.log(fn.length); //fn object has the length property
    return fn.length;
}

functionLength(test1);
functionLength(test2);
functionLength(test3);
