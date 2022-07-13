const mongoose = require('mongoose');

// const conn = async () => {
//     // return await mongoose.connect('mongodb://127.0.0.1:27017/kosmimata');
//     return await mongoose.connect('mongodb+srv://roni:admin@freecluster.dyjz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// }
// console.log(mongoose.connect('mongodb://127.0.0.1:27017/kosmimata'));

mongoose.connect('mongodb+srv://roni:admin@freecluster.dyjz0.mongodb.net/kosmimata?retryWrites=true&w=majority', {useNewUrlParser: true});

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;

