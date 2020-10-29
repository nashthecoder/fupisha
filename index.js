const express = require('express');
const connectDB = require('./config/db');

//Initialise app
const app = express();

// Connect to database 
connectDB();

//Middleware - accepst json data
app.use(express.json());

// Define Routes 
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
