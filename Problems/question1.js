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

export default function functionLength(fn) {
    const str = fn.toString();

    let i = 0, cnt = 0;
    while(str.charAt(i) != ')') {
        if(str.charAt(i) == ',') {
            cnt++;
        }
        i++;
    }

    if(i > 0 && str.charAt(i-1) == '(') {
        return 0;
    }
    return cnt+1;
}
    