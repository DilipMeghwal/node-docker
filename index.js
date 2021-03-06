const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

const app = express()

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
//mongoose.connect("mongodb://admin:admin@172.29.0.2:27017/?authSource=admin")
mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("connected sucessfully")
    })
    .catch((e) => {
        console.log(e)
    })

app.get("/", (req, res) => {
    res.send("<h2>Hello Dilip Meghwal 15th march</h2>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))