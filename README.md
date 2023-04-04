This document outlines the steps required to run a web application built with ReactJS and NodeJS. To start the server, the command 'npm start' must be executed on the server.js file. Next, details such as the username, email, and password must be inserted using Postman in the post request. The application can then be launched with 'npm start', and the login page will appear where users can enter their Northeastern email and password that were provided in the post request.

ReactJS is an open-source JavaScript library that is used to develop web applications quickly and efficiently. NodeJS, on the other hand, is an open-source server-side runtime environment that allows developers to build scalable server-side applications using JavaScript. React Bootstrap is a front-end stylesheet library that is used for styling purposes in the application.

The components used in the application include React components, class components, function components, React Router, Card components, React map(), and React Render. React components are autonomous, reusable code blocks that output HTML, while class components inherit React functionalities and output HTML. Function components, on the other hand, are simpler and require less coding. React Router is used to create applications with multiple page routes. The Card component is a content container that has options for graphics, headers, footers, and background colors. React map() is used to map data pairs and ensure unique key-value pairs are stored. Finally, the React Render method is used to display specific views in the UI by utilizing specific render function logic and returning the result.


-Firstly we will be running the server.js file with command npm start.
-Next we will have to insert the details (username, email and password) in Postman - post.
-Then we will be running the App with command - npm start.
-The login page with open where we will have to enter only Northeastern email id and password which we have posted in postman.
-Reactjs - The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
-Nodejs - User to create app 
Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side application using JavaScript.
-React Bootstrap(used for styling purpose) - React-bootstrap is a front-End Stylesheet library. This library builds with two libraries one is react.js, and the second is bootstrap. But when you use bootstrap in react.js in this way, you use react-bootstrap.

Below are the components with small description which are used in the assignment-

React Component
Components are autonomous, reusable chunks of code. They accomplish the same thing as JavaScript functions, but they operate independently and output HTML.
There are two sorts of components: class components and function components. For the purposes of this lesson, we will focus on function components.

Class Component
The extends React.Component declaration is a requirement for class components. With this declaration, your component gains access to React.functionalities Component's and forms an inheritance to it.
The component also needs to implement the render() method, which outputs HTML.

Function Component
A function component functions similarly to a class component and returns HTML as well, but function components require far less coding and are simpler to comprehend.

React Router
To create application with multiple page routes, we have used react router 
Below is the file structure-
Home.js - Includes basic details about the course
About.js - Includes details about myself and subject details
Jobs.js - Includes which kind of job profile expecting in future 
Contact.js - how to contact me 

Card Component
A content container is a react card component. It has options for graphics, headers, and footers, a variety of material, background colors that are appropriate for the context, and great display options.

Raect map()
A map is a sort of data collection where pairings of data are maintained. It has a special key within. It is necessary to map the key to the value contained in the map. A duplicate pair cannot be kept in the map (). That is as a result of each key being uniquely stored.

React Render
With the use of the function render, React's Render method can reroute a page (). Render a function that we may utilize to define the HTML code inside the HTML element is very crucial. It provides assistance in displaying specific views in the UI by making use of specific render function logic and returning the result.