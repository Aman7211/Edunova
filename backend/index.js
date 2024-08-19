const express = require('express');
const connectDB = require('./config/Database');
require('dotenv').config();
const userRoute = require('./routes/AuthRoute');
const app = express();
const cors = require('cors');
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 9000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Edunova Assignment');
});

app.use('/api/v1/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
