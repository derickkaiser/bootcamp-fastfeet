//import dotenv from 'dotenv';

var dotenv = require('dotenv');

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})