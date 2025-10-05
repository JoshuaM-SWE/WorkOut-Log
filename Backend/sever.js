require('dotenv').config();


const express = require("express");
const mongoose = require('mongoose')

const workoutRoutes = require('./Routes/workouts')



const app = express();

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log("Connect to DB and Express server listening on port !!",process.env.PORT);
        })
    })
    .catch((er) =>{
        console.log(er)
    })



