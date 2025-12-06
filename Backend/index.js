const express = require('express');
const db = require('./db');
const cors = require('cors');
const router = require('./Routes/studentRoute');

const app = express();

app.use(express.json());
app.use(cors())
db();

app.use('/api', router);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server run the port${PORT}`);
})
