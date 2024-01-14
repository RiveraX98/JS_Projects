### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  Used for client side routing

- What is a single page application?
  single page applications use client side routing. No server requests will be made when changing routes. The url will be updated dby javascript

- What are some differences between client side and server side routing?
  server-side : Brower sends a request to the endpoint, page reloads
  client-side: request is not mad , page is re-rendered, javascript manipulates the url

- What are two ways of handling redirects with React Router? When would you use each?
  Import Navigate from react-router-dom then return <Navigate to=""> to redirect the user someone else. Use this when a user hit an endpoint that either doesnt exist or that they dont have access to.
  OR use the "useHistory" hook which pushes the given url to the users window.history rerouting them and allowing them to return back if needed. Use this when routing the user to another page as a final action, like submitting a form.

- What are two different ways to handle page-not-found user experiences using React Router?
  Use <Switch> to wrap all your routes and adding a `NotFound` component in a route listed last. Switch will search for the first route that matches the user inputed url, so if none are found, the `NotFound` component will be rendered
  OR Simply create a 404 component then render it when an "other" url is hit usint <Route path="*">

- How do you grab URL parameters from within a component using React Router?
  import hook useParams then extract the param {params.name}

- What is context in React? When would you use it?
  Context in React allows you to access props in any nested component by defining them in a singular parnet component.
  This is used to prevent prop drilling. Use this when you need access to a specific prop several nested compnents down.

- Describe some differences between class-based components and function
  components in React.

- What are some of the problems that hooks were designed to solve?
  1. Hooks made it easier and cleaner to manage state
  2. Hooks are able to reduce the amount of duplicate code because now you can easily have the same code run at differnt times throught the lifecycle.
  3. Hooks gave the ablitity to easily share code to different components through custom hooks and use context
