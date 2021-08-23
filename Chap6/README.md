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


`create-react-app` also contains two very important tools that enable some of its functionality: `Webpack` and `ESLint`. Webpack is a bundling and minification tool that automates the task of gathering all of the files that make up a project, removing any extraneous, unused pieces, and consolidating them into a few files. By removing extraneous pieces, such as white spaces and unused files or scripts, it can drastically lower the file sizes that must be downloaded by user browsers. This, of course, enhances the user experience. In addition to this core functionality, it provides a "hot reloading" development server, which can allow certain script changes to automatically show in the browser without needing a page refresh (although most changes do seem to trigger browser refreshes, but at least those are automated).

`ESLint` is also an important tool. Since JavaScript is a scripting language and not a compiled language, it does not have a compiler that will check syntax and code validity (obviously, TypeScript does but the TypeScript compiler focuses primarily on typing issues). So, ESLint provides development-time code checking to make sure it is valid JavaScript syntax. And in addition, it allows for the creation of custom code-formatting rules. These rules are generally used to ensure that everyone on the team is coding using the same style; for example, variable naming conventions and bracket indentation. Once rules are set up, the ESLint service will enforce these rules with warning messages.

---

### **Transpilation**

(Babel, TypeScript)

So, transpilation is a lot like compilation. Code is checked for validity and some classes of bugs, but instead of being converted into byte code that can be run directly, it is converted into a different language or language version.

Choosing transpilation as the method of compilation has multiple important benefits. For one, developers do not need to worry whether their code will run on a browser, or whether the user would need to either upgrade or install a bunch of dependencies on that machine first. The TypeScript compiler emits web standard ECMAScript (ES3, ES5, ES6, and so on) and therefore the code can be set to run on any modern browser.

Transpilation also allows developers to take advantage of newer versions of JavaScript before their final release. 

---

### **Code repositories**

(Git, Github)

One of the more important concepts of any code repository is that of branching. This means the ability to indicate multiple versions of a project. For example, these branches could be for the version numbers of a project, such as 1.0.0, 1.0.1, and so on. It could also be for creating separate versions of an app where perhaps some experimental
or high-risk code is being tried out. It would not be a good idea to place such code into the main branch. 

* git: This command is the Git CLI (command-line interface). It must start any Git commands you want to execute. When working with the git command, you are working on a local copy of the repository; you are not directly working on the online repository or affecting your teammates' repositories until you push your changes onto the server.

* clone: This command allows you to copy a repository onto your local machine. Note that when you clone, generally, you will default to the master branch. Here's an example:

         git clone https://github.com/facebook/react.git

* checkout: This subcommand allows you to change your working branch to a different desired branch. So, if you wanted to work in another branch other than the master, you would use this command. Here's an example:

         git checkout <branch-name>

*  add: This subcommand adds the files you recently changed as needing to be tracked, which indicates you will later commit them into the repository. You can do all your changed files in one shot by using . after add or indicate the files explicitly:

         git add <file name>

* commit: This subcommand indicates that you will eventually update your working branch with the files that you just added locally. If you add the -m parameter, you can add a label inline to describe your commit. This command helps team members track which changes were done in each commit:

         git commit -m "My change to xyz"

* push: This subcommand does the actual moving of local committed files into the remote repository:

        git push origin <branch name>


***

# Understanding client-side testing for React

All unit tests work in the same way. This is true not only for React and JavaScript tests, but tests in any language will work in the same manner.

A unit test attempts to test one specific portion of code and it attempts to assert that something about it is true. That's basically it. To put it another way, it means that the test is checking to see whether something expected is indeed the case. If it is not, then the test should fail.

        npm run test

First, you will notice the filename has the text `test` in it. This is what tells `Jest` that this is a test file. Some teams like to place all their tests into a single folder. Some teams prefer to have the test right next to the actual file being tested, as in this case. There is no right answer. Do what works best for you and your team.


We will be placing it side by side for convenience. If we do so, we will need to update our tsconfig.json file to include this compilerOption:

     "types": ["node", "jest"]

---

## Mocking

Mocking is simply replacing specific functionality in our test with default values.

---

### Mocking with jest.fn

Let's learn about mocking with `Jest` as it is also used with `Node` development. The first way to do mocking in `Jest` is to `mock` a specific function using fn. This function takes another function as a parameter that will do whatever you need to be done to set up your desired `mock`. But also, in addition to this ability to replace arbitrary existing code and values, creating a `mock` will give you access to a member called `mock`.

---

### Component mocking

The second form of mocking is to replace whole components entirely and use them in place of real components when we want to test other code.


***

# Learning common tools and practices for React development