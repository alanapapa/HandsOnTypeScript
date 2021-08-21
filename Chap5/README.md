# React Development with Hooks

- Understanding the limitations of class-style components
- Learning about React Hooks and understanding the benefits
- Comparing and contrasting the class-style and the Hooks style

***

# Understanding the limitations of class-style components

When using a class-based style, these components are JavaScript ES6 classes that inherit from React.Component. A component is basically a machine that may contain data, called state, and the component will emit HTML via a language called JSX based upon changes to this data. Although components can become quite complex, at
a basic level this is what they are.

## State

In a React class component, there is a single field called state. This field is an object that can contain any number of properties that describe the associated component. Functions should not be applied to state, but you can have as many functions as you require as members of your class component.

As mentioned, changing state causes the React system to re-render your component. State changes are what drive renders in React and components contain only the UI elements
for themselves, which is a good way of maintaining a separation of concerns and clean coding practices. State changes in class-based components are triggered by the setState function. This function takes a parameter that is your new state and React will later asynchronously update your state. This means the actual state change does not happen immediately but is controlled by the React system.

## Lifecycle methods

<http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

`Mounting` is simply the instantiation and initialization of a component, and then the addition of the initialized component into the virtual React DOM.

`Updating` refers to re-renders. That is when state changes and the UI must be updated.

`Unmounting` is when a component is no longer used and is to be removed from the DOM.

---

### Mounting

- `Constructor`: This is not a lifecycle method but the built-in class constructor. It is traditionally used to initialize state and bind any custom event functions.
- `getDerivedStateFromProps(props, state)`: If you are basing your local state on props from a parent you would use this function. This is a static function. It should be used sparingly as it triggers additional renders. It can also be used in updates.
- `render`: This can also run during updating for re-renders. This function is what triggers the reconciliation process for React. It should only render out JSX, which could also be inside arrays or plain text. If due to state or props you decide there is nothing to render you should return null. It is possible to return a boolean, but outside of testing I see little value in doing this.
- `componentDidMount`: This function is triggered after a component is finished mounting (being initialized). You can place network API calls here. You can also add event handler subscriptions here, but you must remember to unsubscribe them in the componentWillUnmount function or it can cause a memory leak. You can call setState to change local state data here, but you are then triggering a second call to render so it should be used sparingly. SetState is used to update local state.
- `UNSAFE` deprecated methods (do not use) are UNSAFE_componentWillMount, UNSAFE_componentWillReceiveProps, and UNSAFE_ componentWillUpdate.

---

### Updating

- `shouldComponentUpdate(nextProps, nextState)`: This is used to decide whether a re-render should be done or not. It usually compares the previous props to the current props.
- `getSnapshotBeforeUpdate(prevProps, prevState)`: This runs immediately before the render to DOM occurs so you can capture the DOM state just before React changes it. If you return something from this function, it is given as a parameter to the componentDidUpdate function.
- `componentDidUpdate(prevProps, prevState, snapshot)`:This function runs immediately after a re-render is complete. You can make changes to the finished DOM here, or you can call to setState, but you must have a condition so that you do not cause an infinite loop error. The snapshot state comes from the getSnapshotBeforeUpdate function.

---

### Unmounting

- `componentWillUnmount`: This is similar to dispose functions in languages such as C# and can be used to do cleanup work, for example, removing event listeners or other subscriptions.

***

> Having as little local component state as possible is a best practice for React development.

***

# Learning React Hooks and understanding how it is an improvement over class-style components

Hooks are just JavaScript functions that provide certain capabilities to the component. These include the creation of state, access to network data, and just about anything else a component needs. Additionally, Hooks are not component specific, and therefore any Hook can be used in any component—assuming it's useful and makes sense.

* `useState`: This function is the bread and butter of development with Hooks. It replaces the state and setState calls within class components. `useState` takes a value as a parameter that represents the initial state of the state property it is trying to represent. It also returns an array. The first item is the actual state property and the second is a function that can update that property. In general, it is used to update a single value, as opposed to a more complex object that has multiple properties. A better Hook for that type of state may be `useReducer`, which is explained later.

* `useEffect`: This function triggers after components have finished being drawn on the screen. It is similar to `componentDidMount` and `componentDidUpdate`. However, they run before drawing onto the screen happens. It is intended to be used to update state objects. So if, for example, you need to get network data and then update state, you can do it here. You can also subscribe to events here, but you should also unsubscribe by returning a function that does the unsubscribing.
You can have multiple separate implementations of useEffect, each responsible for doing something unique. This function usually runs after every completed screen draw. So, if any component state or props change, this will run. You can force it to run only once, like componentDidMount, by passing an empty array as a parameter. You can also force it to run only when specific props or state changes by passing those as arrays into the useEffect array parameter.
This function runs asynchronously, but if you need to know some element values on the screen, such as scroll position, you may need to use `useLayoutEffect`. This function runs synchronously, allowing you to get certain element values as they currently are on the screen and then do something with them in a synchronous manner. But, of course, this blocks your UI, so you need to only do things that are very fast or the user experience will suffer.

* `useCallback`: This function will create an instance of a function once a set of parameters has been changed. This function exists to try and save memory, because otherwise an instance of the function would be recreated on each render. It takes a handler function as its first parameter and then an array of items that may change as its second. If the items don't change, the callback doesn't get a new instance. Therefore any properties used inside this function will be the prior values.

* `useMemo`: This function is intended to save the result of a long-running task. It's a bit like caching, but it only runs if the array of parameters has changed, so in this sense it's similar to useCallback. However, useMemo returns a value that is the result of some heavy computation.

* `useReducer`: This function works similarly to React Redux. It takes two parameters, reducer and initial state, and returns two objects: a state object that will be updated by the reducer and a dispatcher that receives updated state data, called an action, and passes it to the reducer. The reducer acts as
a filtering mechanism and determines how action data will be used to update the state. This method works well when you want to have a single complex state object with multiple properties that may need to be updated.

* `useContext`: This function is a way of having global state data that can be shared across components. It is better to use it sparingly as it gives the ability to arbitrarily inject state into any child without regard to hierarchy. We will use React Redux rather than Context, but it is good to know it exists.

* `useRef`: This can be used to hold any value in its current property. This value does not trigger a re-render if it changes, and the value lives as long as the component it was created in lives. It's a way of holding state that has no effect on renders. One of its use cases is to hold a DOM element. You may want to do this because under certain circumstances it is necessary to opt out of the standard state-driven React model and access HTML elements directly. For this purpose, useRef is used to access an instance of an element.

***

# Comparing and contrasting the class-style and the Hooks style

## Code reuse

If you look at the class-based lifecycle methods, not only are there many to remember and understand, you can also see that for each class component you would have a pretty much unique implementation of lifecycle functions. This makes code reuse difficult to do with classes. With Hooks, we also have many different built-in Hooks we can use and need to know. However, they are not component specific and can be reused for different components at will. This is the key motivator for using Hooks. Code reuse is much easier because the Hooks are not tied to any specific class. Each Hook is focused on providing a specific capability or functionality, regardless of where it's used. Additionally, if we do the work of building our own Hooks, we can reuse them when appropriate as well.

Hook components and React in general prioritize componentization over inheritance. In fact, the React team states that it is a best practice to use components within other components as a means of sharing code instead of inheritance.

> So, to reiterate, lifecycle components are generally tied to a specific component, but Hooks can be used across components with a little work to properly generalize them.

***

## Simplicity

Do you recall how large `Greeting` became once we added the `getDerivedStateFromProps` call into it? In addition, we always need a constructor to instantiate our state and use bind for all of our components. Since our components are simple, it didn't matter. But for production code, you'll see components with many functions that will all need bind calls put on them.

`Greeting` in the `hooks-component` project was much simpler. Even when that component grows, the Hooks being called will mostly repeat, additionally making code easier to read.