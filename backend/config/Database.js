const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected Successfully");
    } catch (err) {
        console.error("Database Not Connected:", err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
