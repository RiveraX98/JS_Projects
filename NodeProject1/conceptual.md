### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  when using axios you can use .then and .catch to handle the promise returned to you
  you can also use asyc/await to tell js to stop excecution of code until a promise is returned

- What is a Promise?
  A Guarentee of future value

- What are the differences between an async function and a regular function?
  asyc fucntions are ones that take time therefore it tells JS to continue on with the rest of the code will the asyc function finishes. This is since javascript normally runs synchronously

- What is the difference between Node.js and Express.js?
  Node is a javascript enviornment that runs server side
  Express is a back end web application framework for building RESTful APIs with Node.js

- What is the error-first callback pattern?
  Error-First Callback functions is where a function which either returns an error object or any successful data returned by the function. The first argument in the function is reserved for the error object

- What is middleware?
  code that runs in the middle of the request/response cycle

- What does the `next` function do?
  next tells express to run the next matching handler or middleware

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
            must be (axios.get(url))
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');<---invalid

  return [elie, matt, joel];
}
```
