const express = require('express');
const cors = require('cors');
require('dotenv').config();




// configs 
const app = express();
app.use(express.json());
app.use(cors());


// routes



// port
const port = process.env.PORT || 5000;
app.use(port, ()=> console.log(`Server started on port ${port}`));