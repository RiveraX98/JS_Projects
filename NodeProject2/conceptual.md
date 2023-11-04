### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT- JSON web token. Allows authentication through one app and with the returned token alloe access to several apps. The token is sent to and saved on the client side.

- What is the signature portion of the JWT? What does it do?
  The signature is comprised of the hashed header, payload, and secret key. It verifies identity of sender and makes sure the token hasnt been changed.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  JWTS are emcoded in base 64 a hacker and easily decode the payload. Sensitive data should not be saved here.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  When a user is logging in you can use jwt.sign to save the username to the JWT payload and sned it to the client side. Since the token is now stored on the client side the browser will send the token to the server in future request. The server can now validate the token and authenticate the user

- Compare and contrast unit, integration and end-to-end tests.
  Unit Testing - Test a narrow scope. Moduels, functions, routes
  Integration Testing - Test a broader scope; how multiple modules are working together.
  End to End Testing - Simulate and test the apps UI flow.

- What is a mock? What are some things you would mock?
  A mock function is a function that simulates a speecfic behavior of another function. When testing an object that have dependencies it might be a good idea to write a mock function for that dependency. This is to exclude any randomness or dependencies on another API. Test with mock functions are often used in unit testing.

- What is continuous integration?
  Using tools like travis CI to automatically test your code everytime it is pushed to Github

- What is an environment variable and what are they used for?
  Environment variables provide information about the environment in which the process is running.
  Environment variables allow us to keep values on our local and production environments distinct and safe

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development is writing tests first. Doing this helps you think about how the code should work and be structured. However some do not favor this approach because it pushes off the time at which the actural code is written.

- What is the value of using JSONSchema for validation?
  Using JSONSchema for api validation is important because your apps logic is expecting specific data in a specific format. Using JSONSchema pretects you database from invalid data and allows for specific feedback to the user about the type of data your api is expecting.

- What are some ways to decide which code to test?
  Testing your app at 100% coverage is tedious and will take too much time. Test the important aspects of your app.

- What does `RETURNING` do in SQL? When would you use it?
  keyword `RETURNING` in sql allows you to state explicitly what data you need sql to return after the query

- What are some differences between Web Sockets and HTTP?
  HTTP - a unidirectional stateless protocol
  Web socets - a bidirectional stateful protocol

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Flask and Express are very similar in many ways,however, I personally would prefer to use flask. I believe flask to be a bit simpler to use. Express seems a bit more tedious. For examole having to specify async and await, and (req, res, next) for every route. Also having to use module.export when needing to import code. Although doing these little things on there own isnt much work, express seems to have some quirks that I find a bit tedious and annoying. In addition I find writing test code for express using jest tedious as well since you must configure it.
