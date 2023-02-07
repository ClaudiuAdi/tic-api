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

const origin = (origin, callback) => {
  // allow requests with no origin or from dev environment
  const isDev = process.env.NODE_ENV !== 'production';
  if (!origin || isDev) {
    return callback(null, true);
  }

  // allow requests from app URL
  if (origin === process.env.APP_BASE_URL) {
    return callback(null, true);
  }

  // allow request from whitelist
  if (inWhitelist(origin)) {
    return callback(null, true);
  }

  // deny any other request
  callback(new Error('Not allowed by CORS'));
};

app.use(
  cors({
    origin,
    credentials: true,
    exposedHeaders: [
      'Content-Disposition',
      // add exposed headers here
    ],
  })
);

app.use(router);

module.exports = app;
