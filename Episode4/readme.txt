data modelling for backend with mongoose. 
Episode 4 

// in backend modeing the more important question is what data we are going to store  rather than  where we are going to store.

Data modeling tool. 

Moon Modeler. 
is the data modelling tool for mongodb and noSQL. 
Not Free. 

eraser.io  free. 

or Draw the digram in pen or paper. 
alswase make sure ki what data we want from user is most important. 
Example login or signuup. 
here username and password we are validating not getting form user. it is  alredy there. 
what data we want from user is more important. 

do draaw the registration page. 

in any project we have to first thing about the datapoints . 
kon kon sai datapoint lia jai ge. like name, DOB , photo, Email password etc. 
kis tarah sai stored kia jai ge. 




// so wehave decisde to create an  to do app. 
it can contain many todo and each todo  contain subtodo,

for todo 
we have 
content, 
completed, 
createby, 
subtodo

for each subto we have 
content, 
complete, 
createBy


for user we have 

name, 
email, 
password, 


to do the databased mapping the tool which help us is ODM(object data modeeling work for NOSQL) and ORM(object releationakl mapping for SQL)

here we are gona use mongoose. 


// noW as i got all the data point . now i will think how to store the data. 
// i will create a model folder and  

// inside the model folder  i will create a folder which is the namme of database or appication. 
// now after that i will store all the schema there . 


the most common lines in all the schema files. 

import mongoose  from "mongoose";

const userSchema= new mongoose.Schema({})

creating the schema here 

export const User=mongoose.model("User",userSchema)

exporting the schema to mongodb with table or collection  names, "User"  it will be "users" in MongoDB
as mongodb stores the  collection names in small letter and append s at the end. 

also important to know that while givinng the refereacne we we should methin the referenece  

 createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        // we alease give ref which is mention in mongoose.model("User",userSchema)

    },
    so here we are mentionaing the User which is mentiond in mongoose,model not which we are stroing in variable. 

    

















-----------------------------------------------------MERN--------------------------------------------------------------
The MERN stack is a popular set of JavaScript-based technologies for building modern web applications. MERN stands for MongoDB, Express.js, React, and Node.js, and each component plays a specific role in the development process, with all technologies in the stack being based on JavaScript.

Components of the MERN Stack
MongoDB:

A NoSQL database used to store application data.
MongoDB stores data in a flexible, JSON-like format, called BSON (Binary JSON), which aligns well with JavaScript and allows for a more natural flow of data between client and server.
Example: MongoDB can store user data, posts, comments, etc., which can be easily accessed and manipulated as JSON documents.
Express.js:

A web application framework for Node.js that simplifies building robust web APIs.
Express handles the routing and HTTP requests, making it easy to define routes to handle different functions (such as getting, posting, updating, and deleting data).
It acts as a middleware between the front end and MongoDB, processing requests and responses.
React:

A front-end JavaScript library for building user interfaces, especially single-page applications (SPAs).
React allows developers to build reusable UI components, creating a dynamic and interactive experience for users.
It also makes data management straightforward by using a virtual DOM to efficiently update only parts of the UI that have changed, resulting in a faster user experience.
Node.js:

A JavaScript runtime environment that allows developers to run JavaScript on the server side.
Node.js is designed to be fast and scalable, using an event-driven, non-blocking I/O model.
It enables full-stack JavaScript development, meaning both client and server-side logic are written in the same language.
How the MERN Stack Works Together
Here’s a step-by-step flow of how a typical MERN stack application works:

Frontend (React):

The user interacts with the frontend, which is built in React.
React components fetch or update data by making HTTP requests to the backend (Express and Node.js).
React is responsible for rendering the UI and updating the page in response to user interactions (e.g., clicking a button, submitting a form).
Backend (Express & Node.js):

When React sends a request, it reaches the server, which is managed by Node.js and Express.js.
Express processes the request, performs any necessary operations (like validation), and interacts with MongoDB as needed.
Express then returns the appropriate response (such as JSON data or an error message) back to the React front end.
Database (MongoDB):

If the request involves data retrieval, creation, update, or deletion, Express will interact with MongoDB.
MongoDB stores the data in collections (analogous to tables in SQL databases), which contain documents (akin to records).
This data flows back to the frontend through Express, often formatted as JSON.
React Renders the Updated Data:

When the backend response is received, React processes it and updates the UI based on the new or modified data.
This process repeats as the user continues interacting with the app, creating a seamless experience where data flows in real-time between the frontend, backend, and database.
Advantages of the MERN Stack
Single Language Development: JavaScript is used throughout the stack, enabling full-stack developers to write both frontend and backend code in the same language.
JSON Support: MongoDB stores data in BSON format, which can easily be converted to JSON, making data handling smooth between different parts of the stack.
Flexibility: React enables component-based architecture, allowing for reusable components and a dynamic user experience.
Scalability: Node.js and MongoDB are both designed to handle large-scale applications with high performance.
Common Use Cases for the MERN Stack
Single-page applications (SPAs) that need fast data interaction and updates, such as social media platforms, e-commerce sites, and content management systems.
Real-time applications where updates happen frequently, like chat applications or live-streaming platforms.
Data-heavy applications that benefit from MongoDB’s flexibility and scalability in handling complex datasets.
The MERN stack is widely popular because it covers all aspects of web development (front-end, backend, and database) while offering a high-performance, JavaScript-only environment.



