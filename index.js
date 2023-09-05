import express from 'express'
import DBConnect from './DB.js'
import dotenv from 'dotenv' 
import router from './routes/createRoute.js'

const app = express()

dotenv.config({ path: './.env' })

// DB connection 
DBConnect()

// Middleware 
app.use(express.json())

// Routers 
app.use(router)

app.listen(5000, ()=>{
    console.log('Post is listing')
})

// This is the main index file 