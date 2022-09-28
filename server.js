//const hello = require('./hello');
//const lib= require('./lib')
//hello.sayHello();


//node
// const http = require('http');

// http.createServer((req, res) => {

//    res.writeHead(200, {

//    'Content-Type': 'text/plain'

//    });

//    res.end('Hello World');

// }).listen(3000);


// console.log('Server running at http://localhost:3000/');


//connect1
// const connect = require('connect');

// const app = connect();

// app.listen(3000);


// console.log('Server running at http://localhost:3000/');

// function helloWorld(req, res, next) {

//    res.setHeader('Content-Type', 'text/plain');

//    res.end('Hello World');

// };
// function logger (req,res,next){
//    console.log(req.method,req.url);
//    next()
// }
// function goodbyeWorld(req, res, next) {

//    res.setHeader('Content-Type', 'text/plain');

//    res.end('goodbye World');

// };

// app.use(logger);
// app.use('/MyPage',helloWorld);
// app.use('/goodbye',goodbyeWorld);
// app.use(helloWorld);

// console.log('Server running at http://localhost:3000/');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

