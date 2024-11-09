How to connect frontend and backend. 

fullstack proxy and CORS

so fist to make it as a serve we use npm i express. 
now after that 
npm i dotenv to hide the important credencials. 
create a file .env and mention the port number there. and improtant credencials

now to use the contnet from .env file we use require('dotenv').config()

And in main :server.js or index.js we use process.env.port to access the port number


now when i run this  program npm run start

// eror 
Cannot use import statement outside a module
// in  javascript we have 2 way to import the file, packaegs 
common js or module js 

// so in javascript mode of code comes from variaous file. 
// to import the file , packegs it can be doen Aysnchoniusly or sysnchonusly. 
// require() import the file or packages sysnchonusly that why its type is common.js 
// but in case of imprt it work Aysnchoniusly for that it type if module
// import the file modules wise. 

// in short to import the file(javascript file inside the package) asynchornusly we use import 
// in case of synchoniusly we use required 

// required  synchonusly importing is done. mostly use in backend 
// import asynchonusly import of file is done. mostly used in frontend. 





/* important 
When you run npm i express (or npm install express), here's what happens step-by-step:

Download the Express Package:

npm (Node Package Manager) connects to the npm registry, finds the latest version of the Express package, and downloads it to your project's node_modules folder. This folder holds all the packages your project needs.
Update package.json and package-lock.json:

If package.json already exists in your project, express will be added to it under "dependencies", meaning it’s a core dependency of your project.
A package-lock.json file is created (or updated) to record the exact version of express and its dependencies, ensuring everyone who installs the project gets the same versions.
Install Express Dependencies:

Express itself depends on other packages. npm downloads all of Express's dependencies, making sure they’re in node_modules and are compatible.
Make Express Available to Your Project:

Once installed, you can use require('express') (if using CommonJS) or import express from 'express' (if using ES Modules) in your code to include Express and start using it.
In summary: Running npm i express downloads Express and its dependencies, updates your package.json and package-lock.json files, and makes Express available for your project to use.

*/

each package contain set of javascrit file where core code is wrriten as well as some its depencancy also there in and congiguratiion file, 
readme file , etc is there. 



// now backend is ready . 

// now i have to consume backend data in frontend. 


// now in frontend  first thing is how can we make frontend react application. 
// which bundler or also called tool chain. 
// some people choose vite, create react app, parcel etc. 

// bundler or tool chain do nothing but bunding the whole application in html, css and java script. nothibg more than that. 

// we are using here vite bundler to create a react app. 

// now i do not want to create a new foler inside the frontend.  so i use . 
npm create vite@latest .

ones done. 
now it contain package.js 

to npm install or i 
it wll look for all the depency and run the program. 

now to run 
node run dev . 
as in package .json 
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },

// in front end we write our whole front end html and javascript in src/app.jsx
// which is being called in main.jsx as compoent. 

And main is called from packeage.json from scipt. 


// to to get the data from  backend we use Api. 
// from backend we retrive the data using a api. it can be axion , featch etc.  


// to use api we install the axiom api in our appliation. 


// Important 
What Does useEffect Do?
The useEffect hook tells React to do something extra right after the component has rendered or re-rendered.

Here’s how useEffect works in simple terms:

Run Some Code After the Component Renders:

When a component first appears on the screen, useEffect can run any extra code you need (e.g., fetching data or setting up an event listener).
This only happens after React has already drawn the component on the screen.
Re-run When Specific Data Changes:

You can tell useEffect to watch certain data (dependencies). If that data changes, useEffect will re-run. For example, if you’re displaying weather data, you could re-run useEffect every time the selected city changes.
Clean Up When the Component Goes Away:

If you set up something that should be removed when the component disappears (like a timer or event listener), useEffect can also clean up. This cleanup stops the component from running unnecessary tasks when it’s no longer visible.
Simple Example
Imagine a Counter component that shows a number. Every time you click a button, the number goes up.

import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter component rendered or count changed!");

    return () => {
      console.log("Cleaning up!");
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

What’s Happening Here:

Initial Render:

The component appears on the screen with count set to 0.
useEffect runs the code inside it and prints "Counter component rendered or count changed!".
Button Click (Re-render):

When you click the button, count goes up. This change makes React re-render the component to show the new count.
Since count changed, useEffect runs again, printing "Counter component rendered or count changed!".
Cleaning Up:

If this component is removed from the screen, useEffect runs the cleanup code (if provided), which here just logs "Cleaning up!".


//basially  when componet render  which is function i want to do any thing outside the scope of function i do i use useEeeft. 
// or if compoent re rende but at but at perticule condition i want to do some extea then useeffect is used. 
// it is called hook that is we are attaching the hook to function to extent its functinality. 


// now when i try to get the content from backend to front end. why using axio get method. i am getting the error. 

localhost/:1 Access to XMLHttpRequest at 'http://localhost:3000/jokes' 
from origin 'http://localhost:5173' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present on the requested resource.

// my frornt end application is running at 'http://localhost:5173' 
// backend appliation is running at 'http://localhost:3000/jokes' 
// to access is block by corp policy.
// basica 'http://localhost:5173'  can not access 'http://localhost:3000/jokes' 
// cors is basically cross origin request. 
// if your url is difffent and even if your prot is diffrent than still is consider cross origin refrence. 
// same origin means url same, port same eveything should be same then only it is consider same origin. 

// some solution 
1 tell the backend debloper to  front end or some other applocation url which want the respoce from server make them whiteList. 
even he can mark * means allow eveyone.

for that we have to go to the backend and install the cors package. 
npm i cors. 
and make sure to whitelist the url. 
example are mention in cors npm package website.

2 but problem is port can be change of both frontend and backend. when we host. 

// first we have to make our api end point more stander. 
// like http://localhost:3000/api/jokes' instant of http://localhost:3000/jokes' 
// it will make work easier. 

And then used the proxy. 
mostly in front end. 
in case of create react ap or some other bunder they have there own way of defiing proxy . 
// we are using vire bundeler so wwe have to search in interne. proxy in vite bundeler. 

// so in vite.config.js file 
// we are mentioing the proxy. 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{ 
      '/api':'http://localhost:3000' ,  
    },

  },
  plugins: [react()],
})

what it will do when it encounde the /api in url it will apeend http://localhost:3000
and it  make it feel the server that this request send form  front end is  is comming from same same server where backend reside. 
that why it is called proxy . 

axios.get('api/jokes')
    // here i was doing mistake. i was uisng axios.get('http://localhost:3000/api/jokes')

here http://localhost:3000 is already specify in  frontend configuration file. 

// so whenerv doain change just mention the domain in proxy. 

I am getting one issue. 
my jokes count is  visibile but its contian is not visible. 

return (
    <>
    <h1>chai aur code frontend</h1>
    <p>JOKES:{jokes.length} </p>

    {
      jokes.map((Jokeobj,index)=>{
        <div key={Jokeobj.id}>
          <h3>{Jokeobj.title}</h3>
          <h4>{Jokeobj.content}</h4>

        </div>

      })

    }

    </>
  )

  // the issue was 
  {}
  // to return we use ()
  // this one is correct 

   return (
    <>
    <h1>chai aur code frontend</h1>
    <p>JOKES:{jokes.length} </p>

    {
      jokes.map((Jokeobj,index)=>{
        
        return(
        
        <div key={Jokeobj.id}>
          <h3>{Jokeobj.title}</h3>
          <h4>{Jokeobj.content}</h4>

        </div>
        
      )
    }

    }

    </>
  )
}


The issue here is that the function inside map is missing a return statement,
so it’s not actually rendering anything. 
In JavaScript, functions without an explicit return don’t output anything. even the function is inside the return. 
explicit return is important 

Here’s how to fix it:

Add return inside the map function to ensure each div is rendered:
return (
  <>
    <h1>chai aur code frontend</h1>
    <p>JOKES: {jokes.length} </p>

    {
      jokes.map((Jokeobj, index) => {
        return (
          <div key={Jokeobj.id}>
            <h3>{Jokeobj.title}</h3>
            <h4>{Jokeobj.content}</h4>
          </div>
        );
      })
    }
  </>
);


Alternative (Using Implicit Return)
Alternatively, you can use an arrow function with an implicit return by removing the curly braces {} from map.
 This way, you don’t need an explicit return:

return (
  <>
    <h1>chai aur code frontend</h1>
    <p>JOKES: {jokes.length} </p>

    {
      jokes.map((Jokeobj, index) => (
        <div key={Jokeobj.id}>
          <h3>{Jokeobj.title}</h3>
          <h4>{Jokeobj.content}</h4>
        </div>
      ))
    }
  </>
);

In JavaScript:

{} inside an arrow function creates a code block, requiring an explicit return if you want output.
Omitting {} allows an implicit return, meaning the value will be directly returned without needing return.

// when i do npm run build it create a distribute folder dist which is nothing but just static html, css and javascript. 

//now this distribute folder i can copy and past in backendfolder  and by using middleware server this in  / domain. 
// but problem with this is that for each fornt end change agian i have to run biuld command  in front end and latter delete the older dist from backend and past the newer one in backend. 
// that why it is not a good practicle. 
 

