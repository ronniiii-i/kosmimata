const fs = require('fs')
const url = require('url')
const path = require('path');
const express = require('express');
// const conn = require('./database');
const app = express();
const mongoose = require('mongoose');
const port = 7665;
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//connect to database
// console.log(conn, 'hello');
/////

mongoose.connect(
    "mongodb+srv://roni:admin@freecluster.dyjz0.mongodb.net/kosmimata?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true }
).catch((error) => console.log(error))

app.use(express.static(__dirname + '/assets'));

const homepage = fs.readFileSync(`${__dirname}/pages/index.html`,'utf-8');
const blog = fs.readFileSync(`${__dirname}/pages/blog.html`,'utf-8');
const about = fs.readFileSync(`${__dirname}/pages/about.html`,'utf-8');
const ringSizing = fs.readFileSync(`${__dirname}/pages/ring-sizer.html`,'utf-8');
const tandc = fs.readFileSync(`${__dirname}/pages/terms&conditions.html`,'utf-8');
const privacy = fs.readFileSync(`${__dirname}/pages/privacy-policy.html`,'utf-8');
const faq = fs.readFileSync(`${__dirname}/pages/faq.html`,'utf-8');
const upload = fs.readFileSync(`${__dirname}/pages/upload-new.html`,'utf-8');



const productDisplay = fs.readFileSync(`${__dirname}/pages/rings.html`,'utf-8');


app.get('/', (req, res) => {
    res.end(homepage);
});
app.get('/blog', (req, res) => {
    res.end(blog);
});
app.get('/about', (req, res) => {
    res.end(about);
});
app.get('/ring-sizer', (req, res) => {
    res.end(ringSizing);
});
app.get('/terms&conditions', (req, res) => {
    res.end(tandc);
});
app.get('/privacy-policy', (req, res) => {
    res.end(privacy);
});
app.get('/faq', (req, res) => {
    res.end(faq);
});
app.get('/upload-new', (req, res) => {
    res.end(upload);
});





app.get('/products/rings', (req, res) => {
    res.end(productDisplay);
});
app.get('/products/necklaces', (req, res) => {
    res.end(productDisplay);
});
app.get('/products/earrings', (req, res) => {
    res.end(productDisplay);
});
app.get('/products/bracelets', (req, res) => {
    res.end(productDisplay);
});
app.get('/all-gifts', (req, res) => {
    res.end(productDisplay);
});
app.get('/under-150', (req, res) => {
    res.end(productDisplay);
});
app.get('/under-250', (req, res) => {
    res.end(productDisplay);
});
app.get('/under-500', (req, res) => {
    res.end(productDisplay);
});
app.get('/over-500', (req, res) => {
    res.end(productDisplay);
});
app.get('/gift-cards', (req, res) => {
    res.end(productDisplay);
});
app.get('/new-arrivals', (req, res) => {
    res.end(productDisplay);
});
app.get('/best-sellers', (req, res) => {
    res.end(productDisplay);
});
app.get('/all-products', (req, res) => {
    res.end(productDisplay);
});


const test = require('./routes/test')
// app.use('/test', test)
app.use('/stud', test)
// app.post('/test', (req, res) => {
//     return res;
// });

app.listen(7665);

console.log('Now the server is running in url: http://127.0.0.1:7665');
// app.listen(port, "192.168.0.195" || "localhost" ,() => {
//     console.log(`Listening to requests on http://localhost:${port}`);
//   });