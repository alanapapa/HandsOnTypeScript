# 6. Setting Up Our Project Using `create-react-app` and Testing with Jest

- Learning React development methods and about the build system
- Understanding client-side testing for React
- Learning common tools and practices for React development

***

# Learning React development methods and about the build system

## Project tools

So, the point is tooling, frameworks, and structure provide consistent, repeatable ways of writing and maintaining code. You can consider it a sort of culture of programming, where everyone has accepted the norms and practices of the culture and therefore knows what to do and how to behave. This makes code easier to write, share, and refactor.

---

### **`create-react-app`**

> **Warning: Ejection is a non-reversable action**

    npm run eject

Then enter y at the prompt to continue.


* config

    This folder contains most of the configuration files and scripts that the project uses to set itself up. The main thing to note is that the React team by default uses Jest for testing and Webpack for the bundling and minification of JavaScript files.

* node_modules

    This folder contains our project's dependencies. Even before we add our own dependencies, the default set of dependencies is vast. It would be quite difficult to try and use HTML script tags to list out these dependencies. And in most cases, these dependencies don't support script tag references.

* public

    This folder contains static assets that are used in generating our single-page application. This includes our one HTML file called index.html, the manifest. json file that is needed if we are building a PWA application. It is also possible to add additional files such as image files for deployment.

* scripts

    The scripts folder contains scripts that are used to manage the project, for example, scripts that build, start, or kick off tests of the application. Actual test files should not be added here.

* src

    This is, of course, the folder that contains the source files of our project.

* .gitignore

    .gitignore is a file that tells the Git source code repository system which files and folders not to track.

* package.json

    npm is the dependency management system originally created for use with the Node server framework. The capabilities and popularity of this dependency manager eventually made it a standard for client-side development as well. So, the React team uses npm as its base system for project creation and dependency management.

    On top of listing dependencies for projects, it can also list scripts that can be run to manage a project.

    It also has configuration capabilities for things such as Jest, ESLint, and Babel.

* Package-lock.json

    This is a related file that helps maintain a proper set of dependencies and sub-dependencies regardless of their order of installation. We don't need to work with this file directly, but knowing that this helps prevent issues when different developers update their npm_modules folder at different times with a different set of existing dependencies is good knowledge to have.

* tsconfig.json

    We already reviewed this file in Chapter 2, Exploring TypeScript, and as mentioned in that chapter, it contains the settings for the TypeScript compiler to use. Note that, in general, the React team prefers stricter compilation settings. Also notice that the target JavaScript version is ES5. This is because some browsers are not compatible with ES6 yet.

