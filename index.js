var createError = require('http-errors');
const cors = require("cors");
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');


// var indexRouter = require('./routes/api/index');
var signUp = require('./routes/api/signUp');
var login = require('./routes/api/login');
var user = require('./routes/api/users')
var campaign = require('./routes/api/campaign')
const mongoose = require("mongoose");

var app = express();





// view engine setup
// require('dotenv').config()

// app.engine('html', require('ejs').renderFile);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');



// if(process.env.NODE_ENV == "production"){
//   app.use(express.static("client/build"))
  
//   app.get("*", (req, res)=> {
//       res.sendFile(path.resolve(__dirname, "client","build", "index.html"))
//   })
// }

app.use(
  cors({
    // origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true
  })
);
// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


// app.use('/', indexRouter);
app.use('/api/signup', signUp);
app.use('/api/login', login);
app.use('/api/users', user);
app.use('/api/campaign', campaign)

// mongoose uri

const db =  "mongodb+srv://Mega:mega12345@cluster0-fsejl.mongodb.net/test?retryWrites=true&w=majority";

// Connect to mongoose
console.log(db)

mongoose
  .connect(db, 
    {
      useNewUrlParser : true,
      useCreateIndex : true,
      useUnifiedTopology: true 

    })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static("client/build"));
  
  //   app.get("*", (req, res) => {
  //     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  //   });
  // }
// catch 404 and forward to error handler


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.set("port", process.env.PORT || 5200);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// module.exports = app;
