const express = require('express');
const cors = require("cors");
const session = require('express-session');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT;
const usersRoute = require('./routes/usersRoute');
const authsRoutes = require("./routes/authsRoute");
const productsRoute = require('./routes/productsRoute');
const bidsRoute = require('./routes/bidsRoute');
const notificationsRoute = require('./routes/notificationsRoute');

app.use('/api/users', usersRoute);
app.use('/api/auths', authsRoutes);
// app.use('/api/bids', bidsRoute);
// app.use('/api/notifications', notificationsRoute);
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    secure: true, // set to true if using HTTPS
    httpOnly: true, // prevents client-side JavaScript from accessing the cookie
    sameSite: 'none' // set the SameSite attribute to 'None'
  }
}));
    app.use(cors({
      credentials: true,
      origin: 'http://localhost:3000',
      methods: "GET,POST,PUT,DELETE",
    }));


app.listen(port, () => console.log(`Node/Express Server started on port ${port}`));