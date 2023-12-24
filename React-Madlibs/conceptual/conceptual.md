### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React : a front-end JS framework > Used for front-end/UI development, provides light weight templating
- What is Babel?
  Babel : A javascript transpiler >Transform ECMAScript 2015+ code into older javascript code so that older browsers can understand it > Example : Babel transform JSX code into normal Javascript

- What is JSX?
  JSX : A syntactical extension to JavaScript > Makes it possible to write and add HTML in React

- How is a Component created in React?
  Components are just Javascript funtions (or classes) that return JSX > Components are called within JSX and can be nested within other components

- What are some difference between state and props?
  Props : Are similar to arguments; they are immutable variables that are passed to the components and used for configuring the component
  State: Specified Data specific for a component. >State is remembered throught re-renderings > state can be changed but the enitre component will be re-rendered on change.

- What does "downward data flow" refer to in React?
  Downward data flow is the idea that parent components pass data down to their children via props.

- What is a controlled component?
  In React a controlled component is a component that is controlled by React state. React has fulll controll and knowledge of every change state

- What is an uncontrolled component?
  An uncontrolled component maintains its own internal state and when the user interacts with the component, it updates its own state

- What is the purpose of the `key` prop when rendering a list of components?
  Multiple adjacent eleements need to have a key prop so that react can easily identify each one.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  An index would not be ideal because but arrays can mutate and indices can change.

- Describe useEffect. What use cases is it used for in React components?
  UseEffect is a react hook that handels "side effects". > Allows a function to be run ONLY when its dependencies change

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  useRef is a react hook that is used to reference an element or variable that will persist / NOT change upon rerenders

- When would you use a ref? When wouldn't you use one?
  Use useRef when you need to access underlying DOM elements, when you need acces to a variable outside its function scope or when setting up/clearing Intervals.

- What is a custom hook in React? When would you want to write one?
  Custom Hooks are reuseable helper functions that return a state and a function to change that state.
  Create custom hooks for logic that is being repeated in multiple components.
