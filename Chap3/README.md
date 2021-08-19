# 3. Building Better Apps with ES6+ Features

* Learning about ES6 variable types and JavaScript scoping
* Learning about arrow functions
* Changing the this context
* Learning about spread, de-structuring, and rest
* Learning about new array functions
* Learning about new collection types
* Learning about async await


# Learning about ES6 variable types and JavaScript scoping

Scope in JavaScript is handled by the body of
a function, which means when a variable is declared inside a function body using the `var` keyword, that variable is only accessible within that body.

`const` variables support something called block-level scoping. Block-level scoping is scoping between any squiggly brackets.

`let` variables are, like const variables, also block- scoped.

> The current best practice in the community is to prefer using `const`, as immutability is a beneficial attribute and also, using constants adds a tiny performance benefit. However, if you know that you need to be able to reset the variable later, then use `let` instead. Finally, avoid using `var`.

***
***

# Learning about arrow functions

Basically, they serve two main purposes:
* They shorten the syntax for writing functions.
* They also automatically make the immediate scope parent, the this object, the arrow function's parent.

In JavaScript, the this object, the owner object instance that member properties and methods belong to, can change based on the context of a call. So, when a function is called directly—for example, MyFunction()—the parent this would be the caller of the function; that is to say, the current scope's this object. For browsers, that would usually be the window object. However, in JavaScript, functions can also be used as object constructors—for example, new MyFunction(). In this case, the this object inside the function would be the object instance that was created from the new MyFunction constructor.

All non-arrow functions in JavaScript have access to a collection called arguments. This is a collection of all the parameters given to the function. Arrow functions do not have their own arguments collection. However, they do have access to the immediate function parent's arguments collection.

The arrow function has several body styles. Here are examples of the three styles:

    const func = () => console.log('func');
    const func1 = () => ({ name: 'dave' });
    const func2 = () => {
        const val = 20;
        return val;
    }

- The first function, func, shows the case where only a single line of code is used in the function body, and nothing is returned, as you can see that the body has no closing braces or parentheses.
- The second function, func1, shows when there is only a single line, but something is returned. In this case, the return keyword is not needed, and parentheses are needed only if an object is returned.
- The final case is func2. In this case, squiggly brackets are needed because it is a multi-line statement (regardless of whether it returns or not).

***

# Changing the this context

`bind` is used to make the `this` context change and later, when the function is called, it will have the changed this object. However, `call` and `apply` are used at the time the function is called and immediately replace the `this` context at the time of calling. The difference between `call` and `apply` is that `call` takes an indeterminate number of parameters and `apply` takes an array of parameters.

***

# Learning about spread, de-structuring, and rest

## Spread, Object.assign, and Array.concat

The spread, Object.assign, and Array.concat JavaScript features are fairly similar. Basically, you are appending multiple objects or arrays together into one object or array. However, strictly speaking, there are some differences.

In the case of objects, there are two ways of merging or concatenating objects:

- Spread—for example, { ... obja, ...objb }: You are creating a non-modified copy of these two objects and then creating a brand-new object. Note that spread can handle more than just two objects.
- Object.assign—(obja, objb): You are adding the properties from objb into obja and returning obja. Therefore, obja is being modified.

>

Now, for merging or concatenating arrays, you also have two methods:

- The spread operator: Like spread for objects, it merges the arrays and returns a single new array. Original arrays are not modified.
- Array.concat: Creates a new array by merging the two source arrays into a single array. Original arrays are not modified.

***

## Destructuring

Destructuring is the ability to display and directly use the internal properties of an object instead of relying on the object name alone.

So, we use object destructuring to select only the fields we care about. Note, in addition, that we also give the field name an alias by using the colon.

Destructuring is also possible for arrays.

So, we can also destructure an array as well, but note that the order of the elements does matter at destructure time. Let's look at the results for both functions.

***

## Rest

Rest is a feature that allows you to refer to an indefinite set of parameters with one keyword, the `...` keyword. Any rest parameters are arrays and therefore have access to all array functions. The rest keyword refers to "the rest of the items" and not "pause" or ''stop." This keyword allows more flexibility when creating your function signature, as it allows the caller to determine how many parameters they want to pass. Please note that only the last parameter can be a rest parameter.

***
***

# Learning about new array functions

## find

The `find` keyword allows you to grab the first instance of an element from an array that matches your search criteria. it always gives back only one item—the first one found in the array.

## filter

`filter` is similar to `find` except it returns all items that match a search criterion.

## map

the map function has two parameters, item and index (you can call them whatever you like, but the order matters), and it maps custom return values to each array element. To be clear, return means to return each item back into a new array. It does not mean to return and stop running the iteration.


## reduce

The reduce function is an aggregator that takes each element in an array and, based on custom logic, creates a single final value.

Notice the logic of the reducer can be anything; it does not have to be a sum. It could be a subtraction or any other logic that you may need. The core point is that at the end, you will have only a single value or object result. This is why it is called reduce.


## some and every

These functions are designed to test for certain criteria. So, they only return `true` or `false`. `some` tests to see whether any element in an array meets certain criteria and `every` tests whether all elements meet a certain criteria.

***
***

# Learning about new collection types

## Set

Set is a collection of unique values or objects. This is a good function to use when you simply want to see whether an item is contained in a large complex list.

> In regard to sets, size is used to check quantity not length.

Conceptually, it is still quite similar to an array but is optimized for unique collections.


## Map

Map is a collection of key-value pairs. In other words, it's a dictionary. Every member of Map has a unique key.


***
***

# Learning about async await

- asynchronous code
- Promise
- async/await

> Each call to await blocks the code at that point until the function completes and returns.

