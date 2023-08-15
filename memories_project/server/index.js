// import express from 'express'
// import bodyParser from 'body-parse'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import http from 'http'
// import postRoutes from './routes/posts'



const express = require("express")
const cors = require("cors")
const bd = require("body-parser")
const mongoose = require("mongoose")
const postRoutes = require('./routes/posts')
const app = express()


app.use('/posts', postRoutes)
app.use(bd.json({ limit: "30mb", extended: true }))
app.use(bd.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())


const CONNECTION_URL = "mongodb+srv://AreebHusain:mongodbaReeb128@cluster0.ymorhs7.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // w: 'majority',
    // wtimeout: 30000
})
    .then(() => {
        app.listen(PORT, () => {
            // return true;
            console.log(`Server is running on port:${PORT} `)
        });
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// mongoose.set('useFindAndModify', false)


// app.listen(PORT, () => {
//     // return true;
//     console.log(`Server is running on port: `)
// });