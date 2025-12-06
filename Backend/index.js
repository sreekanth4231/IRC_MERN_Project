// const express = require('express');
// const db = require('./db');
// const cors = require('cors');
// const router = require('./Routes/studentRoute');

// const app = express();

// app.use(express.json());
// app.use(cors())
// db();

// app.use('/api', router);

// const PORT = 5000;

// app.listen(PORT,()=>{
//     console.log(`server run the port${PORT}`);
// })


require("dotenv").config();
const express = require('express');
const db = require('./db');
const cors = require('cors');
const router = require('./Routes/studentRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
db();

// Routes
app.use('/api', router);

// Use PORT from .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
