const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const PORT = 3003;
const app = express();
app.use(cors());
const api = require('./routes/api');
app.use(bodyParser.json());
app.use('/api', api);
app.get('/', (req, res)=> res.send('Hello from server'))
app.listen(PORT,()=>{
  console.log('server is running '+PORT);
})