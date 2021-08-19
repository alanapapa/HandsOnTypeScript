- What are types?
- Exploring TypeScript types
- Understanding classes and interfaces
- Understanding inheritance
- Learning generics
- Learning the latest features and configuring the compiler

***

# What are types?

A type is a reusable set of rules. A type may include properties and functions (capabilities). It can also be shared and reused over and over again. When you reuse
a type, you are creating an instance of it. This means that you are creating an example of your type that has specific values for properties. In TypeScript, as the name implies, types are very important. They're the main reason why the language was created in the first place. Let's take a look at how types work in TypeScript.


> The first thing to realize about types in TypeScript is that they are handled by their shape and not by their type name. This means the name of a type is not that important for the TypeScript compiler, but the properties it has and their types are important.

***
***

# Exploring TypeScript types

## The `any` type

The `any` type is a dynamic type that can be set to any other type. If you declare a variable to be of the `any` type, this means that you can set it to anything and reset it to anything else later as well. It is in effect no type because the compiler will not check it on your behalf. This is the key fact to remember about `any` – the compiler will not intercede and warn you of issues at development time. Therefore, if possible, using the `any` type should be avoided. It may seem weird that a language that was built to be statically typed would have such a feature, but it is a necessity under certain circumstances.

> It is important not to abuse the `any` type. You should be careful to only use it when you know you have no other alternative – for example, when type information is not clear or can change. There are a few alternatives to using the `any` type, however. Depending on the circumstance, you may be able to use interfaces, generics, unions, or the `unknown` type instead. We'll cover the rest of these possibilities later, but for now, let's go over the `unknown` type next.

***

## The unknown type

The `unknown` type is a type released in TypeScript version 3. It is similar to `any` in that once a variable of this type is declared, a value of `any` type can be set to it. That value can subsequently be changed to any other type. So, I could start by setting my variable to a string type and then later set it to number. However, you cannot call any of its members or set the variable as a value to another variable without first checking what its type really is. I'll show an example of this as follows. The only time you can set unknown to something else without first checking its type is when you set an unknown type to another unknown or an `any` type.

***

## Intersection and union types

In the following code, each type is a distinct type, but the & keyword is used to merge the two into a single type:

    let obj: { name: string } & { age: number } = {
        name: 'tom',
        age: 25
    }
    console.log(obj);

This means that the type value can be either ```null``` or an object of the ```{ name: string }``` type:

    let unionObj: null | { name: string } = null;
    unionObj = { name: 'jon'};
    console.log(unionObj);

***

## Literal types

Literal types are similar to union types, but they use a set of hardcoded string or number values. Here's a simple example of string literals that is fairly self-explanatory. As you can see, we have a bunch of hardcoded strings as the type. This means that only values that are the same as any of these strings will be accepted for the literal variable:

    let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
    literal = "sue";
    console.log(literal);

A numeric literal is also possible in the same way, but the values are made of numbers instead of strings.

***

## Type aliases

Type aliases are used very frequently in TypeScript. This is simply a method to give a different name to a type and most of the time it is used to provide a shorter simpler name to some complex type. For example, here's one possible usage:

    type Points = 20 | 30 | 40 | 50;
    let score: Points = 20;
    console.log(score);

In this code, we take a long numeric literal type and give it a shorter name of Points. Then, we declare score as the Points type and give it a value of 20, which is one of the possible values for Points. And of course, if we tried to set score to, let's say, 99, compilation would fail.

Another example of aliases would be for object literal type declarations:

    type ComplexPerson = {
        name: string,
        age: number,
        birthday: Date,
        married: boolean,
        address: string
    }

***

## Function return types

    function runMore(distance: number): number {
        return distance + 10;
    }

The runMore function takes a parameter of the number type and returns a number. The parameter declaration is just like any variable declaration, but the function return comes after the parentheses and indicates what type is returned by the function. If a function returns nothing, then you can either not declare any type for the return or you can declare void to be more explicit.

***

## Function as types

    type Run = (miles: number) => boolean;
    let runner: Run = function (miles: number): boolean {
        if(miles > 10){
            return true;
        }
    return false;
    }
    console.log(runner(9));

The first line shows us a function type that we will be using in this code. The Run type alias is only there to make it easier to reuse the long function signature. The actual function type is (miles: number) => boolean. This looks odd, but it's nothing more than a slimmed-down function signature. So, the only things needed then are the parentheses to indicate parameters, the => symbol, which indicates that this is a function, and then the return type.

***

## The never type

This type is going to sound quite strange at first. A never type is used to indicate a function that never returns (completes), or a variable that is not set to anything, not even null. At first glance, this sounds like the void type. However, they are not at all the same. In void, a function does return, in the complete sense of the word, it just does not return any value (it returns undefined, which is no value). In the case of never, the function does not finish at all. Now, this seems totally useless but it's actually quite useful for indicating intent.

***
***

# Understanding classes and interfaces

## Classes

### Access modifiers

```private``` - Firstly, it is telling the compiler that the class has a field called msg of the string type that should be private. Normally, this sort of declaration is done in a line above or below the constructor separately, which is totally valid to do, but TypeScript allows us to use a shortcut by adding it to the constructor parameter. Additionally,
by adding this to the constructor, you can see that it allows our msg field to be set at instantiation time with the new Person("hello") call.

> As mentioned previously, ECMAScript 2020 will support private fields via the # symbol. However, only fields are supported, and it is such a new standard that browser support is limited as of the time of writing.

```readonly``` - This one is relatively straightforward; it causes a field to become read-only after it has been set one time in the constructor.

```protected``` - allows the class and any inheriting classes to have access to the member.

### Getters and setters (computed properties)

- Getter: A property that allows modification or validation of a related field before returning it
- Setter: A property that allows modification or computation of a value before setting to a related field

The TypeScript compiler has options that it can take in order to customize its behavior. In the case of this example, getters and setters and the includes function are only available in ES5 and ES6, respectively. If you're not familiar with it, the includes function checks whether a string is a substring of a larger string. So, let's tell the TypeScript compiler that it needs to compile to a newer JavaScript target than ES3, which is the default.

    tsc --target "ES6" getSet

### Static properties and methods

When you mark something as static inside of a class, you are saying that this member is a member of the class type and not of the class instance. Therefore, it can be accessed without needing to create an instance of a class, but instead by prefixing with the class name.

Another point to be aware of is that inside a class, static members can be called by
both static members and instance members. However, static members cannot call instance members.

***

## Interfaces

In object-oriented programming design, another important principle is abstraction.
The goal of abstraction is to reduce complexity and the tight coupling of code by not exposing the internal implementation. One way of doing this is to use interfaces to show only the signature of a type, as opposed to its internal workings. An interface is also sometimes called a contract, since having specific types for parameters and return types enforces certain expectations between both the user and the creator of the interface. So, another way of thinking about interfaces is as strict rules about what can come out of and go into a type instance.

Another possible use of interfaces is when using third-party APIs. Sometimes, the type information is not well documented and all you're getting back is untyped JSON or the object type is extremely large and has many fields you will never use. It is quite tempting, under these circumstances, to just use any as the type and be done with it. However, you should prefer providing a type declaration if at all possible.

***
***

# Understanding inheritance

    class Vehicle {
    constructor(protected wheelCount: number) {}

    showNumberOfWheels() {
        console.log(`moved ${this.wheelCount} miles`);
        }
    }

    class Motorcycle extends Vehicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
        }
    }

    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
    }

    const motorCycle = new Motorcycle();
    motorCycle.showNumberOfWheels();
    motorCycle.updateWheelCount(3);
    motorCycle.showNumberOfWheels();
    const autoMobile = new Automobile();
    autoMobile.showNumberOfWheels();


Providing scope with namespaces hides whatever is inside one namespace from the outside of it.

    namespace A {
        class FirstClass {}
    }

    namespace B {
        class SecondClass {}
        const test = new FirstClass(); // FirstClass not found
    }

***

## Abstract classes

An abstract class can act both as a regular class, providing member implementations, and as an interface, providing only the rules for implementation for a child class. Note that since an abstract class can have abstract members, you cannot instantiate an abstract class.

Furthermore, if you look at the Automobile class, you can see that it has its own implementation of showNumberOfWheels, even though this function is not abstract. This demonstrates something called overriding, which is the ability of a child's member to create a unique implementation of the parent's member.

***

## Interface

As explained earlier, interfaces are a way of setting agreed-upon rules for a type. They will allow us to separate implementation from definition and therefore provide abstraction, which again is a powerful object-oriented programming principle that will give us higher- quality code.

TypeScript interfaces provide a set of type signatures for an interface's members but have no implementation themselves.

Interfaces do not provide a means to do code reuse directly, as they have no implementation. However, it is still advantageous for code reuse because the structure of interfaces provides definite expectations around what code will receive and return. Hiding the implementation behind an interface is also beneficial in terms of doing encapsulation and abstraction, which are also important principles of object-oriented programming.

> When using TypeScript, take full advantage of inheritance models from object- oriented programming that are available to you in TypeScript. Use interfaces
to abstract implementation details. Use private and protected to help encapsulate data. Remember, when the time comes to compile and convert your code into JavaScript, the TypeScript compiler will do any translation work for you to get things back into the prototypical style. But while in development mode, you should take advantage of all the capabilities that TypeScript provides to enhance your development experience.

***
***

# Learning generics

Generics allows a type definition to include an associated type that can be chosen by the user of the generic type, instead of being dictated by the type creator. In this way, there are structures and rules, but still some amount of flexibility.

Generics can be used for functions, classes, and interfaces.

***
***

# Learning the latest features and configuring the compiler

## Optional chaining

This feature will allow us to write simpler code, but also prevent a small class of errors having to do with null objects.

    console.log("car ", car);
    console.log("wheels ", car?.wheels);
    console.log("count ", car?.wheels?.count);

This is called optional chaining. The question mark indicates that the object could possibly be null or undefined. If it is null or undefined, then the code will end at that object, returning whichever value the object or property is, and not continue to the rest of the properties, but without causing an error.

So, if we wrote the bottom console code the old way, we would have to do a great deal of code testing in order to make sure that we would not cause an error by calling something that is potentially undefined. We would use the ternary operation and it could look something like this:

    const count = !car ? 0
        : !car.wheels ? 0
        : !car.wheels.count ? 0
        : car.wheels.count;

***

## Nullish coalescing

Nullish coalescing is simply a shortcut of the ternary operator. So, it's pretty straightforward and it looks like this:

    const val1 = undefined;
    const val2 = 10;
    const result = val1 ?? val2;
    console.log(result);

The double question marks work from left to right. The statement means if val1 is not null or undefined and has an actual value, then return that value. However, if val1 does not have a value, return val2. So, in this case, compiling and running would result in 10 being written to the console.

> In the case of nullish coalescing, only null or undefined specifically are being checked.

***

## TypeScript configuration

TypeScript configurations can be passed in via the command line or, more commonly, through a file called tsconfig.json. If you use the command line, then call the compiler like this:

    tsc tsfile.ts –lib 'es5, dom'

This tells TypeScript to ignore any tsconfig.json file and just use the command-line options – in this case, the –lib option, which states which version of JavaScript is being used during development, and compiles only this one file. If you just put tsc onto the command line, TypeScript will look for a tsconfig.json file and use that configuration and compile all ts files it finds.

* --lib: This is used to indicate which JavaScript version you will use during development.
* --target: This indicates which version of JavaScript you want to emit out into .js files.
* --noImplicitAny: Does not allow the any type, without explicitly declaring it.
* --outDir: This is the directory where JavaScript files will be saved to.
* --outFile: This is the final JavaScript filename.
* --rootDirs: This is an array that stores the .ts file source code.
* --exclude: This is an array of folders and files to exclude from compilation.
* --include: This is an array of folders and files to include in compilation.



