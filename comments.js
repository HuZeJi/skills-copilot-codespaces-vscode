// create web server
const express = require('express');
const app = express();
const port = 3000;

// import the comments router
const commentsRouter = require('./routes/comments');

// use the comments router
app.use('/comments', commentsRouter);

// start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});