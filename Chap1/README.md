# 1. Understanding TypeScript


# Dynamic versus static typing

Every programming language has and makes use of types. A type is simply a set of rules that describe an object and can be reused. JavaScript is a dynamically typed language. In JavaScript, new variables do not need to declare their type and even after they are set, they can be reset to a different type. This feature adds awesome flexibility to the language, but it is also the source of many bugs.

Static typing removes ambiguity from code, both to the compiler and other developers. This clarity can reduce errors and make for higher-quality code.


# Object-oriented programming

JavaScript is known as an OOP language. It does have some of the capabilities of other OOP languages, such as inheritance. However, JavaScript's implementation is limited both in terms of available language features and design. In this section, we'll take a look at how JavaScript does OOP and how TypeScript improves upon JavaScript's capabilities.

First, let's define what OOP is. There are four major principles of OOP:
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

Let's review each one.

## Encapsulation

A shorter way of saying encapsulation is information hiding. In every program, you
will have data and functions that allow you to do something with that data. When we
use encapsulation, we are taking that data and putting it into a container of sorts. This container is known as a class in most programming languages and basically, it protects that data so that nothing outside of the container can modify or view it. Instead, if you want to make use of the data, it must be done through functions that are controlled by the container object. This method of working with object data allows strict control of what happens to that data from a single place in code, instead of being dispersed through many locations across a large application—which can be unwieldy and difficult to maintain.

There are some interpretations of encapsulation that focus mainly on the grouping of members inside a common container. However, in the strict sense of encapsulation, information hiding, JavaScript does not have this capability built in. For most OOP languages, encapsulation requires the ability to explicitly hide a member via a language facility. For example, in TypeScript, you can use the private keyword so that a property cannot be seen or modified outside of its class. Now, it is possible in JavaScript to simulate member privacy through various workarounds, but again this is not part of the native code and adds additional complexity. TypeScript supports encapsulation with access modifiers such as private natively.

> Privacy for class fields will be supported in ECMAScript 2020. However, as this is a newer feature, it is not supported across all browsers at the time of writing.

***

## Abstraction

Abstraction is related to encapsulation. When using abstraction, you hide the internal implementation of how data is managed and provide a more simplified interface to the outside code. Primarily, this is done to cause "loose coupling." This means that it is desirable for code that is responsible for one set of data to be independent and separated from other code. In this way, it is possible to change the code in one part of the application without adversely affecting the code in another part.

Abstraction for most OOP languages requires the use of a mechanism to provide simplified access to an object, without revealing that object's internal workings. For most languages, this is either an interface or an abstract class. We'll review interfaces more deeply in a later chapter, but for now, interfaces are like classes whose members have no actual working code. You can consider them a shell that only reveals the names and types of object members, but hides how they work. This capability is extremely important in producing the "loose coupling" mentioned previously and allowing code to be more easily modified and maintained. JavaScript does not support interfaces or abstract classes, while TypeScript supports both features.

***

## Inheritance

Inheritance is about code reuse. For example, if you needed to create objects for several types of vehicles—car, truck, and boat—it would be inefficient to write distinct code for each vehicle type. It would be better to create a base type that has the core attributes of all vehicles, and then reuse that code in each specific vehicle type. This way, we write some of the needed code only once and share it across each vehicle type.


Both JavaScript and TypeScript support classes and inheritance. If you're not familiar with classes, a class is a kind of type that stores a related set of fields and also may have functions that can act on those fields. JavaScript supports inheritance by using a system called prototypical inheritance. Basically, what this means is that in JavaScript, every object instance of a specific type shares the same instance of a single core object. This core object is the prototype, and whatever fields or functions are created on the prototype, they are accessible across the various object instances. This is a good way of saving resources, such as memory, but it does not have the level of flexibility or sophistication of the inheritance model in TypeScript.


In TypeScript, classes can inherit from other classes but they can also inherit from interfaces and abstract classes. Since JavaScript does not have these features, in comparison, its prototypical inheritance is limited. Additionally, JavaScript has no ability to inherit from multiple classes directly, which is another method of doing code reuse called multiple inheritance. But TypeScript does allow multiple inheritance using mixins. We'll dive deep into all these features later, but basically, the point is that TypeScript has a more capable inheritance model that allows for more kinds of inheritance and therefore more ways to reuse code.


***

## Polymorphism

Polymorphism is related to inheritance. In polymorphism, it is possible to create an object that can be set to one of any number of possible types that inherit from the same base lineage. This capability is useful for scenarios where the type needed is not immediately knowable but can be set at runtime once the appropriate circumstances have arisen.


This feature is used less often in OOP code than some of the other features, but nevertheless can be useful. In the case of JavaScript, there is no direct language support for polymorphism, but due to its dynamic typing, it can be simulated reasonably well (some JavaScript enthusiasts will strongly disagree with this statement, but please hear me out).


Let's look at an example. It is possible to use JavaScript class inheritance to create a base class and have multiple classes that inherit from this one parent base class. Then, by using standard JavaScript variable declaration, which does not indicate the type, we can set the type instance at runtime to whichever inheriting class is appropriate. The issue I find is that there is no way to force the variable to be of a specific base type since there is no way to declare types in JavaScript, therefore there is no way of enforcing only classes that inherit from the one base type during development. So, again, you have to resort to workarounds such as using the instanceof keyword in order to test for certain types at runtime, to try and enforce type safety.


In the case of TypeScript, static typing is on by default and forces type declaration when the variable is first created. Additionally, TypeScript supports interfaces, which can be implemented by classes. Therefore, declaring a variable to be of a specific interface type forces all classes instantiated to that variable to be inheritors of the same interface. Again, this is all done at development time before code is deployed. This system is more explicit, enforceable, and reliable than the one in JavaScript.