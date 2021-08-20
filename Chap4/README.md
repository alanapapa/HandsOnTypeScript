# 4. Learning Single-Page Application Concepts and How React Enables Them

- Understanding how websites were built in the past
- Understanding SPA benefits and attributes
- Understanding how React helps build SPA applications

***

# Understanding how websites were built in the past

1. HTML
2. CSS
3. JavaScript
4. Common Gateway Interface (CGI)
5. Server-Side Rendering (SSR)
6. Single-Page Application (SPA)

***

# Understanding SPA benefits and attributes

As mentioned earlier, the impetus for using SPA-style application building is to make our web app look and feel more like a native application. By using SPA application methods, we will make our program respond and look like it was installed on the device. Classic- style web apps can seem sluggish since any changes to the page require a call back to the server to get a new screen. However, SPA-style apps redraw portions of the screen immediately without waiting for a new file to come back from the server. Therefore, as far as the user can tell, a SPA application is a native device application.

* As the name suggests, the entire app lives on one HTML page only. Unlike standard HTML apps, which use separate pages to show different screens, the first page is the only page that ever loads on a SPA application.

* Instead of static HTML files, JavaScript renders the screen dynamically. Therefore, the HTML page that is first downloaded is actually almost entirely empty of content. But what it will have is a root element inside of the body tag that becomes the container for the entire application, which again is rendered live as the user interacts with the application.

* All scripts and files needed to run the application are generally downloaded in the beginning, when retrieving the main HTML file. However, this method is changing and more applications are downloading only a base-level script file and then downloading other scripts on-demand as needed. We'll review how to use these techniques later, as they can enhance the user experience by reducing screen wait times.

* URL routing is handled differently for SPAs. In SPA applications, there is some mechanism used, depending on the framework you choose, in order to create virtual routing. Virtual routing simply means that although it appears to the
user that different calls to different server-side URLs are being made, in reality,
all the "routing" is only happening on the client browser in order to make logical transitions to different screens. In other words, no calls to servers are made and URL routing becomes a means to logically separate an app into different screens. For example, when a user types a URL into their browser, they must then press Enter for the submission to be posted back to the server that is the destination of the URL. However, in the case of routing happening in a SPA app, there is no actual server path indicated by the URL. It does not exist. Therefore, the postback is never triggered. Instead, the application uses the URL as a sort of container for sections of the application and also to trigger certain behaviors when certain URLs are given. Having said this, URL routing is still a useful feature to have, as routing is an expected capability by most users and it allows them to bookmark screens.


***

# Understanding how React helps build SPA applications

As mentioned previously, a website is primarily just an HTML file, which is a text-based document. This file contains code that the browser uses to create a logical tree called the Document Object Model (DOM). This tree represents all of the HTML elements within the file according to their order and relative to other elements in the structure. All websites have a DOM structure on their pages, whether they use the SPA style or not. However, React takes advantage of the DOM in unique ways in order to help build apps.

React has two main constructs:

* React maintains its own virtual DOM at runtime. This virtual DOM is distinct from the browser's DOM. It is React's own unique copy of the DOM that it creates and maintains based on the instructions from our code. This virtual DOM is created and edited as needed based on a reconciliation process that the React service does internally. The reconciliation process is a comparison process where React looks at the browser DOM and contrasts that with its own virtual DOM. This reconciliation process is generally known as the render phase. When differences are found—
for example, the virtual DOM contains an element not contained in the browser DOM—React will send instructions to the browser DOM to create that element so that the browser DOM and the virtual DOM match. This process of adding, editing, or removing elements is known as the commit phase.

* The other main attribute of React development is that it is state-driven. In React, an application is made up of many components, and in each component, there may be some local state (that is, data). If this data changes for any reason, React will trigger its reconciliation process and make changes in the DOM if needed.

***

## Attributes of a React application

    npx create-react-app my-app --template typescript

    # or

    yarn create react-app my-app --template typescript

Let's take a look at what create-react-app gives us, starting from the top:

- The build folder is the destination of all of our bundled and minified final production files. They have been shrunken down to be as small as possible and debug information has also been removed in order to enhance performance.

- Next, we have the node_modules folder, which contains all of our dependencies that we download from the npm repository.

- Then, we have the public folder, which is a folder for static assets, such as the index.html file, which will be used to build out our final app.

- Next, we have what is perhaps the most important folder, called src. As the shortened name implies, this is the folder that contains all of our source scripts. Any files with a .tsx extension indicate a React component. .ts files are just plain TypeScript files. Finally, .css files have our styling attributes (and there can be more than one). d.ts files are files that contain TypeScript typing information that the compiler uses to determine static type checks it needs to do.

- Next is the .gitignore file. This file is for use with the GitHub code repository we are using to save this book's source code. As the name implies, with this file, we are telling our git system to not upload certain files and folders, but to
ignore them.

- The package.json and package-lock.json files are for configuring and setting our dependencies. Additionally, they can store configurations for our build, test, and run scripts, as well as configurations for the Jest testing framework.

- Finally, we have our tsconfig.json file, which we discussed in Chapter 2, Exploring TypeScript. It will configure the TypeScript compiler. Please notice that by default, strict mode is turned on, and therefore we cannot use implicit any or undefined.

---

First, we'll start with the `package.json` file. There are many sections to the package.json file, but let's look at some of the most important ones:

- The `dependencies` section contains the libraries that our app will be using
for certain pieces of functionality. These dependencies include React, as well as TypeScript and Jest libraries for doing testing. The @types dependencies contain the TypeScript definition files. TypeScript definition files store static typing information for frameworks that are written in JavaScript. In other words, this file tells the TypeScript compiler the shape of the types being used by a framework so that type declarations and checking can be done.

- There is another dependencies section, called `devDependencies` — although it's not used here—which normally stores development time dependencies (as opposed to the dependencies section, which normally only stores the runtime dependencies). For whatever reason, the React team decided to merge the two into dependencies. Having said that, you should be aware of it as you'll see this section in many projects.

- The `scripts` section is for storing scripts that manage the application. For example, the start script is used by calling npm run start, or npm start for short. This script is used to start our application using a development server. We can also add our own scripts, as we'll do later, for doing things such as deploying production files to a server.

---

> `Service workers` are a way of doing simple threading in JavaScript. We will not be using this feature, but it comes as part of the create-react-app project, so I have left it for completeness.

---

We are starting with this file because this is React's entry point for the application. It's where React starts its runtime build process. Now, if we start from the top, we can see that ES6 syntax for importing dependencies is being used. React and related modules are being imported, including the core App module, which we'll explore shortly. After the imports, we can see that ReactDOM.render is called, which ultimately "writes out" the HTML of all our components combined. It takes two arguments. One is the lowest - level React component from which rendering will start and the other is the HTML element used to contain the rendered content. As you can see, the App component is wrapped with a component called React.StrictMode. This component is simply an aid to development. When compiling in production mode, it has no effect and does not impact performance. However, in development mode, it provides extra information about potential issues in our code. This may change over time, but here is a list of the current help it provides:

- Identifying components with unsafe life cycles: It will show you if you are using unsafe life cycle calls, such as componentWillMount, componentWillReceiveProps, and componentWillUpdate. When coding with Hooks, these issues don't apply, but it is good to be aware of them for legacy class-based components.

- Warning about legacy string ref APIs: The older way of creating a reference to an HTML element, as opposed to a React component, was to use a string—for example, ```<div ref="myDiv">{content}</div>```. Because this method uses a string, it has issues and now the preferred method is to use ```React.createRef``` instead.

- Warning about deprecated findDOMNode usage: findDOMNode is now deprecated because it broke abstraction principles. Specifically, it allowed parent components, in a component tree, to code for specific child components. This tie-in to code implementation means that it becomes difficult to change code later because the parent now depends on something existing in its component tree.

-  Detecting unexpected side effects: Side-effects are unintended consequences of our code. For example, if my class component initializes its state in the constructor from some other function or property, it would not be acceptable if that state sometimes received different values for every initialization. In order to help catch these kinds of issues, React.StrictMode will run certain life cycle calls, such as, for example, the constructor or getDerivedStateFromProps, twice to try and show whether this type of thing is happening. Note that this only happens during development.

- Detecting the legacy context API: The context API is a React feature that provides a global state across all components of an application. There is a newer version of the API and the older one is now deprecated. This checks that you are not using the older one.

---

Although the index.tsx file is the main starting point for React, the actual components that we will build for our app start in the App.tsx file. So, this is a very important file for us.

Let's discuss some items in this code:

- First, we are importing React from the React npm dependency. If you look inside of the npm_modules folder, you will find a subfolder called react, and that folder is what this import statement is referring to. Any code imports we did not create ourselves will be in the node_modules folder.
- Next is the logo import. Image assets are imported into a JavaScript variable—in this case, the logo variable. Also, as you can see, since this is not an npm module, it requires a dot reference. npm modules do not require a relative path because the system is aware of which folder to start looking in, npm_modules.
- Next, we import App.css. This file is the styles file and therefore does not have
an associated JavaScript variable to it. Since it is not an npm package, it also requires a relative path.
- The App component is a functional component, as shown by its syntax. The App component is the root parent component for the entire application. This component has no state of its own and just renders out content. So, the return statement is the rendered content and it is using JSX.
- We'll go into much more detail about what JSX is in later chapters; however, for now, JSX is HTML-like syntax written in JavaScript. It was created by the React team to make it easier and clearer to create HTML content with React components.
- The style reference to CSS classes, which is normally set as class, is set as className, as shown in the code. This is because class is a JavaScript keyword and so cannot be used here.
- Squiggly brackets indicate code is being passed, not strings. For example, the img tag's src attribute takes a JavaScript variable, logo, as its value, and also that value is inside of squiggly brackets. To pass strings, use quotes.
