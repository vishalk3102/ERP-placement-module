const express = require('express')
const dotenv = require('dotenv')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors')

dotenv.config({ path: 'config/config.env' })
const app = express()

// USING MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: process.env.NODE_ENV === 'development' ? false : 'none',
      maxAge: 1000 * 60 * 100
    }
  })
)

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
// const student = require('./routes/Student/studentRoute')
// const admin = require('./routes/Admin/adminRoute')
// const faculty = require('./routes/Faculty/facultyRoute')
// const other = require('./routes/Other/otherRoute')
const user = require('./routes/userRoute')
const admin = require('./routes/adminRoute')
const branch = require('./routes/branchRoute')
const subject = require('./routes/subjectRoute')
const marks = require('./routes/marksRoute')
const notice = require('./routes/noticeRoute')
const timetable = require('./routes/timetableRoute')
const materials = require('./routes/materialRoute')

app.use('/api/v1', user)
app.use('/api/v1', admin)
// app.use('/api/v1', branch)
// app.use('/api/v1', subject)
// app.use('/api/v1', marks)
// app.use('/api/v1', notice)
// app.use('/api/v1', timetable)
// app.use('/api/v1', materials)

// app.use('/api/v1', student)
// app.use('/api/v1', admin)
// app.use('/api/v1', faculty)
// app.use('/api/v1', other)

// app.use('/api', student)
// app.use('/api', admin)
// app.use('/api', faculty)
// app.use('/api', other)

app.use(errorMiddleware)
module.exports = app
