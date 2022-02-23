# ExpressJSPractice

<b>Express JS:</b> Express JS is a framework of Node(server side JS) which helps us to focus on our business logic instead of focusing on basic common functionalities like sending a request or reading parsing a request and much more. We have to just call middleware and use it.

<b> Installing Express JS :</b>npm install --save express

<b>Middleware: </b> Middlewares are functions which are hooked together. They take the request and, the request got processed through these middleware functions and we get the response. Middleware functions has access to request object(req), response object(res), and the next function is application request-response cycle.The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
Middleware functions can perform the following tasks:
<ul>
  <li>Execute any code.</li>
  <li>Make changes to the request and the response objects.</li>
  <li>End the request-response cycle.</li>
  <li>Call the next middleware in the stack.</li>
</ul>
