const User = require('../models/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            user,
            message: "User successfully registered."
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error creating new user."
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not registered. Please register first."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password."
            });
        }

        const payload = {
            email: user.email,
            name: user.name,
            id: user._id
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        });

        const userObject = user.toObject();
        userObject.token = token;
        userObject.password = undefined; // Remove password from response

        return res.status(200).json({
            success: true,
            userObject,
            message: "User successfully logged in."
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error logging in user."
        });
    }
};
