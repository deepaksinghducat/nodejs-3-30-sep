import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views' , 'views');

// Database configuration
mongoose
    .connect('mongodb://localhost:27017/todo')
    .then(con => {
        console.log(`Mongodb is connected on host: ${con.connection.host}`);
    })
    .catch(err => {
        console.log(err);
    })

//Import Routes
import routes from "./routes/route.js";

app.use(routes)


app.listen(3000, () => {
    console.log(`listening on 3000`);
})