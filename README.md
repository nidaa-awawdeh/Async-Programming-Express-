# Async-Programming-Express-
 <h3>link challenge and workshop </h3>
 <h4>https://hackmd.io/uHfemtDRQBu7gQca2mU1-w?both </h4>
 <h4>https://github.com/GSG-G8/mc-promise-me-this</h4>
<ul>
   <p> <strong>What is async function </strong> </p>
   <li> <p> The async function declaration defines an asynchronous function — a function that is an AsyncFunction object. Asynchronous functions operate in a separate order than the rest of the code via the event loop, returning an implicit Promise as its result. But the syntax and structure of code using async functions looks like standard synchronous functions. </p> </li>
<hr>
   <p> <strong>Syntax </strong></p>
   <li> async function name([param[, param[, ...param]]]) { <br>
   statements<br>
} 
</li>
<br>
<p> <strong>Parameters</strong> </p>
<li> name<br>
The function’s name </li>
<li> param <br>
The name of an argument to be passed to the function</li>
<li>statements <br>The statements comprising the body of the function. </li>
<li> <p> <strong>Return value</strong> </p> <br>
 A Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function. </li>
</ul>
 <ol> 
 <h1>Description </h1>
 <li>An async function can contain an await expression that pauses the execution of the async function to wait for the passed Promise's resolution, then resumes the async function's execution and evaluates as the resolved value. </li>
 <li>The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError. </li>
 <li>While the async function is paused, the calling function continues running (having received the implicit Promise returned by the async function). </li>
 <li>The purpose of async/await is to simplify using promises synchronously, and to perform some behavior on a group of Promises. As Promises are similar to structured callbacks, async/await is similar to combining generators and promises. </li>

  </ol>
   <hr>
   <ul>
   <h1>await and parallelism </h1>
   <li>In sequentialStart, execution suspends 2 seconds for the first await, and then another second for the second await. The second timer is not created until the first has already fired, so the code finishes after 3 seconds. </li>
    <li> In concurrentStart, both timers are created and then awaited. The timers run concurrently, which means the code finishes in 2 rather than 3 seconds, i.e. the slowest timer.
However, the await calls still run in series, which means the second await will wait for the first one to finish. In this case, the result of the fastest timer is processed after the slowest</li>
 <li>If you wish to fully perform two or more jobs in parallel, you must use await Promise.all([job1(), job2()]), as shown in the parallel example. </li>

   </ul>
<hr>
<ol>
  <li><p> <strong>A callback </strong> is a function which is called when a task is completed, thus helps in preventing any kind of blocking and a callback function allows other code to run in the meantime. Callback is called when task get completed and is asynchronous equivalent for a function. Using Callback concept, Node.js can process a large number of requests without waiting for any function to return the result which makes Node.js highly scalable. For example: In Node.js, when a function start reading file, it returns the control to execution environment immediately so that the next instruction can be executed. Once file I/O gets completed, callback function will get called to avoid blocking or wait for File I/O.
 </p> </li>
 <li> <h1> Promises:</h1> <br>
 <p> Promises are a more modern solution to async operations than callback. They are cleaner and more reliable and readable than callbacks. Think of them as an abstraction over callbacks that gives us more functionality.</p>
  </li>

 <hr> 
 <p> note : you can see week3 project to see how xhr do </p>
<h3> resource </h3>
<ol>
 <li><p>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 
</p> </li>
<li>https://www.geeksforgeeks.org/node-js-callback-concept/ </li>
<li>https://www.tutorialsteacher.com/mvc/mvc-architecture </li>

 </ol>
