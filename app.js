const express = require('express');
const app = express();
const tasks = require('./routes/tasks')


//middleware
app.use(express.json());


//routes
app.get('/hello', (req, res) => {
  res.send('Task manger App')
})
app.use('/api/v1/tasks', tasks)

// server
const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`))
