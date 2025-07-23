const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/localhelp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to E-Panhandler API');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
