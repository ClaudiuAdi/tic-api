require('express-async-errors');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const router = require('./router');

const app = express();

const { initializeFirestore } = require('./functions');
initializeFirestore();

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;
