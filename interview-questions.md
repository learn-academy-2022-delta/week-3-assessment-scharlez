# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: `This` is for functionality, so when you are using react for instance and you want to apply certain behaviors to an object or a component you could type this.state or this.xyzMethod to change how the outputs or results are being managed.

  Researched answer: `This` allows programmers to use/reuse functions with different contexts, meaning it tell which object will be the main focus when invoking a function. `This` keyword can be used in a variety of ways depending upon the goal. It can used to reference current class instance variables, as a method parameter, or most popularly to invoke particular class method/as an agrument in the constructor call as seen in React. 


2. What is React? Why would you use it?

  Your answer: React is an interactive library for building user interfaces within the Javascript language environment. It is a useful tool to help mainly front-end developers streamline tasks dealing with customizing aspects geared toward to the users' experience. React also collaborates well with HTML & CSS languages becauses they all target the same audience - user interface. 

  Researched answer: React is a Javascript library, originally founded by Facebook, but mostly seen as a Javascript framework for building user interfaces components. React is seen as primarily a front-end developer tool as it collaborates well with the HTML & CSS languages becauses they all target the same audience - UI.  It is dynamic in nature due to it giving the developer the ability to define components as classes or functions and changes only what actually needs changing. It has lifecycles that are used for initializing thru using: `constructor()` along with `super()` - in tandem with the `this.state` & event handler methods; as well as lifecycles for updating like: `render()`, which is the only required method when it comes to class components but its a bit picky as one cannot do any sort of modifications in this stage so that must be done elsewhere. 



3. Which lifecycle method is required in a React class component?

  Your answer: `this.setState` is the method required during a React class component because it initializes or starts the behaviors or how it will interact with users once the programming is complete. Additionally it is used to update the information of component. 

  Researched answer: The `render()` is lifecycle method that is most common and required when it comes to a React class component due to it handling the performance of the component in relation to the UI. React is conditional with the use of `render()`, meaning the functions following it must return with the same output when the same inputs are inserted. Therefore,  `this.setState` cannot be used under a render since you don't (or can't) modify the component state from this level. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is used with React and responsible for those familiar with HTML syntax to do similiar work through the Javascript environment. With JSX, one has to import or point the child components back to the parent edition on the original App.js file which stores the bulk of the information. 

  Researched answer: JSX is JavaScript + XML or a React version of HTML, allows the use of HTML-like syntax that can be used to create React components. Without JSX, it would more difficult to create largely nested HTML documents using JS only syntax. Speaking of syntax, a major difference between native HTML and JSX is with JSX the word "class" cannot be used to identify HTML/CSS classes, since that word is reserved in JavaScript, so as an alternative or work around, instead one would use - "className". 



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a JS file manager that is used to connect your JS files to a node so that one's changes can be viewed in a browser. When you run yarn your App.js and node files are modified becauses they are directly effected by the changes or edits done when writing code through React/JS. 

  Researched answer: Yarn is package file manager, originally released from Facebook that is used with React and Jest. When running yarn through a React application the "package.json" and "yarn.lock" files are modified because are both important pieces for connecting the node and active files. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: 

  Researched answer:


## Looking Ahead: Terms for Next Week

1. Conditional rendering: applying conditions in the same manner you would with regular Javascript like using conditional operators or JS operators like `if` to create live element representation that thru React can be udated to mirror the user interface.

2. Object-oriented programming: centered around object creation that contains data & methods, this helps lessen repetition of code and thus cleaner.

3. Ruby: open source pprogramming language thats designed to be more humancenteric, meaning the syntax is mire natural to read and easy to write having a focus around simpliicity yet pproductivity. 

4. Ruby blocks: allows programmers more freedom and flexible when it comes to code because the functions are annoymous in nature and can be passed into methods.

5. Ruby hashes: aka associative arrays is a collection of individualized keys and their relative values, the layout is like an array but instead of having integers, programmers have the ability to use any object type as its index.
