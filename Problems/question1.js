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
  // Convert function to string for knowing the parameter and extract
  const functionString = fn.toString();

  // taking only parameter of the function by splitting this ,first index is included while last is not included

  const parameterList = functionString
    .slice(functionString.indexOf("(") + 1, functionString.indexOf(")"))
    .split(",");
  console.log(parameterList);
  // Check if the function has parameters
  if (parameterList[0] === "") {
    return 0;
  } else {
    return parameterList.length;
  }
}

// function foo() {}
// function bar(a) {}
// function baz(a, b) {}

// functionLength(foo); // 0
// functionLength(bar); // 1
// functionLength(baz); // 2
