function MyFunction () {
    console.log(this);
}

MyFunction();
let test = new MyFunction();

/*
So, when MyFunction is called directly,
the immediate scope parent is going to be Node's global object,
since we are not running in a browser.
Next, if we create a new object from MyFunction
using new MyFunction(), the this object becomes
its own object instance since the function
was used to create an object as opposed to being run directly.
*/