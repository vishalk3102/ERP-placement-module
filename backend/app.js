const express = require('express')
const dotenv = require('dotenv')
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors')

dotenv.config({ path: 'backend/config/config.env' })
const app = express()

// USING MIDDLEWARE
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,

//     cookie: {
//       secure: process.env.NODE_ENV === "development" ? false : true,
//       httpOnly: process.env.NODE_ENV === "development" ? false : true,
//       sameSite: process.env.NODE_ENV === "development" ? false : "none",
//     },
//   })
// );

app.use(cookieParser())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
)

app.enable('trust proxy')

// IMPORTING ROUTES
const student = require('./routes/Student/studentRoute')
const admin = require('./routes/Admin/adminRoute')
const faculty = require('./routes/Faculty/facultyRoute')
const other = require('./routes/Other/otherRoute')
// const order = require("./routes/orderRoute");

app.use('/api', student)
app.use('/api', admin)
app.use('/api', faculty)
app.use('/api', other)

// app.use('/api/student/auth', require('./routes/Student Api/studentCredential'))
// app.use('/api/faculty/auth', require('./routes/Faculty Api/facultyCredential'))
// app.use('/api/admin/auth', require('./routes/Admin Api/adminCredential'))
// Details Apis
// app.use('/api/student/details', require('./routes/Student Api/studentDetails'))
// app.use('/api/faculty/details', require('./routes/Faculty Api/facultyDetails'))
// app.use('/api/admin/details', require('./routes/Admin Api/adminDetails'))
// Other Apis
// app.use('/api/timetable', require('./routes/timetable'))
// app.use('/api/material', require('./routes/material'))
// app.use('/api/notice', require('./routes/notice'))
// app.use('/api/subject', require('./routes/subject'))
// app.use('/api/marks', require('./routes/marks'))
// app.use('/api/branch', require('./routes/branch'))
//USING ERROR MIDDLEWARES
app.use(errorMiddleware)
module.exports = app
