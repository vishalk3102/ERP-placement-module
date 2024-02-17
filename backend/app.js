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
const user = require('./routes/userRoute')
const admin = require('./routes/adminRoute')
const faculty = require('./routes/facultyRoute')
const student = require('./routes/studentRoute')
const placement = require('./routes/placementRoute')

app.use('/api/v1', user)
app.use('/api/v1', admin)
app.use('/api/v1', faculty)
app.use('/api/v1', student)
app.use('/api/v1', placement)

app.use(errorMiddleware)
module.exports = app
