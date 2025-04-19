const mongoose = require('mongoose');

 require("dotenv").config();

 const connectwithDB = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Database connected successfully')
    }).catch((error) => {
        console.log("Database connection failed");
        console.log(error.message);
           process.exit(1);
    });
}



module.exports = connectwithDB;



