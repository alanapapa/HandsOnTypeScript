const callerObj = {
    name: 'jon'
}

function checkMyThis(age) {
    console.log(`What is this ${this}`);
    console.log(`Do I have a number? ${this.name}`);
    this.age = age;
    console.log(`What is my age ${this.age}`);
}

checkMyThis();
checkMyThis.call(callerObj, 25);

/*
The first execution of the checkMyThis function uses the global object by default,
since it was not overridden. Again, for Node, it's Node's global object,
but for browsers, it's the window object. We also see that the name and age fields are undefined,
since Node's global object does not have the name field and the age was not passed as a parameter
to checkMyThis. However, on the second execution of the function, the one that uses call,
we see that the object has changed to a standard object type and it has a name of jon,
which is the name field for callerObj, and an age field equal to 25, which is the parameter we passed into call.
You should note the order of the parameters list for call follows the order of the parameters list of the function being called.
The usage of apply would be identical; however, it takes parameters as an array.
*/