# 7. Learning Redux and React Router

- Learning about Redux state
- Learning about React Router

***

## Redux

```
npm i redux react-redux @types/redux @types/react-redux
```

This way, if this data ever did get updated, we could be assured that all components, no matter what section of the app they are in, would get the latest valid data. This is what Redux can do for our application. We can consider it a **single source of truth**.

Redux is a data storage service that maintains all the globally shared data in our React application. Redux provides not only the store itself, but also the base functions needed to add, remove, and share this data. One difference with React state, however, is that Redux state is not necessarily going to trigger UI updates. It certainly can if we desire to do so, but there is no explicit necessity for doing so. So, we should keep that in mind.

Redux uses a pair of concepts called reducers and actions.


> A utility type is simply a helper class that the TypeScript team created to give specific functionality. There are many different utility types and a list can be found here: https://www.typescriptlang.org/docs/ handbook/utility-types.html.

Preparation
- 1. src/store/AppState.ts. This file will store our aggregated reducer object called rootReducer of type AppState, which represents the global state.
- 2. src/store/configureStore.ts, which will contain our actual store object used by Redux and the app.
- 3. update index.tsx file to call our configureStore method and initialize Redux for our app.

Reducer
- 4. src/store/`Some`Reducer.ts, create a constant for the action type called SOME_TYPE, create `Some`, `Some`Action interfaces. And then, finally, we create our reducer called `Some`Reducer.
> A reducer always takes the state and action parameters. Note, state is not the entire state, it is only the partial state relevant to some reducer. This reducer will know whether the passed-in state is its own based on the action type. Also notice that the original state is never mutated. This is extremely important. Never change the state directly. You should either return the state as is, which is done in case default, or return some other data. For example, action.payload.
- 5. go back into src/store/AppState.ts and add this new reducer. And the same with other reducers.

- 6. We get an instance of dispatch with the `useDispatch` Hook. dispatch is a Redux function that sends our action data to Redux. Redux then sends the action to each of our reducers for processing. Then the reducer that recognizes the action type accepts it as its state payload.
- 7. The `useSelector` Hook gets the specific user reducer. It takes a function as a parameter and this function takes the entire aggregated reducer state and only returns the user reducer.


---

### React Context

Context is a newer feature that came out a little before Hooks. Context is not a separate dependency but is built into React core. It allows similar functionality to Redux in that
it allows state to be stored in a single source and then shared across components, without having to manually pass down props through the component hierarchy.

Context, unlike Redux, has no concept of reducers. Therefore, all users of Context will receive the entire set of state data, which is not a good practice in terms of the separation of concerns. Over time, it can become confusing as to what subset of the data
a particular component should deal with.

One additional side effect of having all state data available to all component users is that, even if a component does not actually access the specific state member, any Context changes will trigger a re-render. 


***

## Learning about React Router

Routes in React Router are simply React Router components that contain our own application components, and these components in turn represent our screens. In other words, a route in React Router is a logical representation of a virtual location (by virtual location, I mean a URL that is just a label and does not actually exist on any server). The "routers" in React Router act as parent components and our screen rendering components act as children.

```
npm i react-router-dom @types/react-router-dom
```

> React Router routes are React components. This may seem weird as they have no visible UI. Nevertheless, they are parent components, except they render their children but have no UI of their own.

- 1. src/index.tsx. Add a new root component wrapping our App component, called `BrowserRouter`. `BrowserRouter` is a bit like Redux's `Provider` in the sense that it is a single parent component that provides various props to child components that are relevant to doing routing.
- 2. src/App.tsx. The Switch component indicates a parent that determines which route to choose by matching the browser URL to a path property of a Route instance.

```
<Switch>
    <Route exact path="/" component={ScreenA} />
    <Route path="/b" component={ScreenB} />
</Switch>
```

* Property  `exact` tells React Router not to use regular expressions in determining a route match but instead to look for an exact match.
* Property `path`, which supposed to be our URL path after the root domain. This path is by default a "contains" path, meaning that any URL that contains the same value as the path property will be accepted and the first matching route will be rendered, unless we included the `exact` property.
* Property called `component`, which refers to the child component that is to be rendered. And for simple scenarios, using this property works fine.
> But what if we need to pass some additional props to our component?
* React Router provides another property called `render`, which allows us to use what's called a render property. A `render` property is a property that takes a function as its parameter. When the parent component does its rendering, it will call the render function internally.

```
<Switch>
    <Route path="/c" render={() => <ScreenC message={"This is Screen C"} />} />
</Switch>
```

> If we had tried to use the `component` property of Route, there would be no way to pass the message property and so we are using the `render` property instead.


- props.history.push("/");
- props.history.goBack();

> One more thing to review: React Router recently added the Hooks capability. So, we no longer have to pass down route properties using a child's props; we can just use Hooks. Here's what it looks like (i've kept the non-Hooks as comments for your convenience):

```
import { useHistory, useParams } from "react-router-dom";

const history = useHistory();
const { userid } = useParams();
```

Routing is a vital part of web development. Routes help users know where they are in the application and can provide a sense of context. Routing also helps us as developers structure the logical sections of our application and group relevant items together. React Router allows us to do all these things by providing many programmatic features that allow us to build sophisticated routing into our applications.

---

err: Property 'userid' does not exist on type '{}'.
```
> 18 |   const { userid } = useParams();
```
solve: [stackoverflow.com](https://stackoverflow.com/questions/59085911/required-url-param-on-react-router-v5-with-typescript-can-be-undefined)

The default typing you got there is proper and you should null check the value before using it. If ever you would want to override the typing, useParams is generic and accepts a type specifying the return value type. **Fix:**

```const { userid } = useParams<Record<string, string | undefined>>()```