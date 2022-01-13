import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import StudentData from './models/student.js';
import studentRoutes from './routes/student.js';



const app = express();
// app.use('/students', studentRoutes);

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));


app.use('/students', studentRoutes);

const CONNECTION_URL = 'mongodb+srv://ngoadmin:ngoadmin@cluster0.b4zp6.mongodb.net/student?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> app.listen(PORT, ()=>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err)=> console.log(err.message));


